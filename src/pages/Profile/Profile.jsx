import React from "react";
import PostsContainer from './components/Posts/PostsContainer';
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";

const Profile = () => {
	return (
		<div className={`${s.profile} profile`}>
      <ProfileInfo />
			<PostsContainer />
		</div>
	)
};

export default Profile;