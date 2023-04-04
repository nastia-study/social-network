import React from 'react';
import { NavLink } from 'react-router-dom';

const User = (props) => {
  return (
    <NavLink to={`/dialogs/${props.id}`}>
      {props.name}
    </NavLink>
  )
};

export default User;