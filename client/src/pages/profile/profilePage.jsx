import React from "react";
import { useSelector } from "react-redux";

import "./profilePage.styles.scss";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="profile-page-container">
      <h2>Profile</h2>
      <div className="profile-infos">
        <img src={user.imageUrl} alt="profile" />
        <h4>Name: {user.name}</h4>
        <h4>Email: {user.email}</h4>
      </div>
    </div>
  );
};

export default ProfilePage;
