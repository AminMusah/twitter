import React from "react";

function Profile({ name, image, icon, username }) {
  return (
    <div className="profile">
      <div className="profile-img">
        <img src={image} alt="supreme" />
      </div>
      <div>
        <p style={{ fontWeight: "900" }}>{name}</p>
        <p style={{ color: "#888", fontSize: "12px", marginTop: "-3px" }}>
          {username}
        </p>
      </div>
      <i className={icon}></i>
    </div>
  );
}

export default Profile;
