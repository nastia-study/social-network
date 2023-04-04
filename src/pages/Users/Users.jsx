import React from "react";
import styles from './Users.module.css';
import axios from 'axios';

const Users = (props) => {

  if (props.users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(res => props.setUsers(res.data.items));
  }
  
	return (
		<div>
      {
        props.users.map(user => {
          return (
            <div className={styles.user} key={user.name + Math.random()}>
              <span>{user.name}</span>
              <span>{user.status}</span>
              {
                !user.isFollowed ?
                <button onClick={() => props.follow(user.id)}>follow</button> :
                <button onClick={() => props.unfollow(user.id)}>unfollow</button>
              }
            </div>
          )
        })
      }
    </div>
	)
};

export default Users;