import React from "react";
import Post from "../Post/Post";
import styles from "./Posts.module.css";

const Posts = (props) => {
  console.log('props', props);
  const newPostText = React.createRef();

  const handleButtonClick = () => {
    props.handleButtonClick();
  };

  const handlePostTextChange = () => {
    const text = newPostText.current.value;
    props.handlePostTextChange(text);
  };

	return (
		<div>
			<h4 className={styles.header}>my Posts</h4>

      <div className={styles.add_post_container}>
        <textarea 
          className={styles.input} 
          ref={newPostText} 
          value={props.newPostText}
          onChange={handlePostTextChange} 
        />
        <button className={styles.add_post_button} onClick={handleButtonClick}>add post</button>
      </div>

			<div className={styles.posts_container}>
				{
          props.posts.map(post => <Post key={post.text} message={post.text} />)
        }
			</div>
		</div>
	)
};

export default Posts;