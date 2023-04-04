import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../store/posts-reducer";
import Posts from "./Posts";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleButtonClick: () => {
      dispatch(addPostActionCreator());
    },
    handlePostTextChange: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    }
  }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;