import React from "react";
import Login from "./Login";

const UserProfile = ({ user, isAuthenticated }) => {
  return !isAuthenticated ? (
    <Login />
  ) : (
    <div>
      <img src={user.avatar} alt="avatar" />
      <h2>{`Hello ${user.name}`}</h2>
    </div>
  );
};

export default UserProfile;
