import React from 'react';
import User from '../User/User';

import s from './Users.module.css';

const Users = (props) => {
  return (
    <div className={s.users}>
      {
        props.users.map(user => <User key={user.name} id={user.id} name={user.name} />)
      }
    </div>
  )
};

export default Users;