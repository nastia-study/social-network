import React from "react";
import styles from './Navbar.module.css';

import { NavLink } from "react-router-dom";

const Navbar = () => {

  let activeStyle = {
    width: '100%',
    borderBottom: '1px solid #000000',
    display: 'block'
  }

	return (
		<nav className={`${styles.navbar} navbar`}>
			<div>
				<NavLink 
          to="/profile" 
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
        >
          Profile
        </NavLink>
			</div>
			<div>
				<NavLink 
          to="/dialogs"
          style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }
        >
          Messages
        </NavLink>
			</div>
      <div>
				<NavLink 
          to="/users"
          style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }
        >
          Users
        </NavLink>
			</div>
			<div>
      <NavLink 
          to="/news"
          style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }
        >
          News
        </NavLink>
			</div>
			<div>
      <NavLink 
          to="/music"
          style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }
        >
          Music
        </NavLink>
			</div>
			<div>
      <NavLink 
          to="/settings"
          style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }
        >
          Settings
        </NavLink>
			</div>
		</nav>
	)
};

export default Navbar;