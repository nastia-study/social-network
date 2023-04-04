import React from "react";
import styles from './Users.module.css';
import AvatarBlank from '../../assets/avatar.png';

const Users = (props) => {
  let pagesArr = [];
  // for (let i = 1; i <= Math.ceil(this.props.totalCount / 10); i++) {
  //   pagesArr.push(i);
  // }
  for (let i = 1; i <= 10; i++) {
    pagesArr.push(i);
  }
  return (
    <div>
      <div className={styles.pagination}>
        {
          pagesArr.map(page => (
            <button onClick={() => props.onPageChange(page)} className={styles.page}>{page}</button>
          ))
        }
      </div>
      {
        props.users.map(user => {
          const { name, id, photos, status, isFollowed } = user;
          return (
            <div className={styles.user} key={name + Math.random()}>
              <div className={styles.avatar}>
                {
                  photos.small ? photos.small :
                  photos.large ? photos.large :
                  <img src={AvatarBlank} alt="avatar" />
                }
              </div>
              <span>{name}</span>
              <span>{status}</span>
              {
                !isFollowed ?
                <button className={styles.button} onClick={() => props.follow(id)}>follow</button> :
                <button className={styles.button} onClick={() => props.unfollow(id)}>unfollow</button>
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Users;