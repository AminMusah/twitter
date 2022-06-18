import React from "react";
import Icon from "./Icon";
import Profile from "./Profile";

function SideBar() {
  return (
    <div>
      <div className="sidebar">
        <div>
          <div className="logo">
            <img
              className="twitter"
              src="https://cdn.iconscout.com/icon/free/png-64/twitter-241-721979.png"
              alt=""
            />
          </div>

          <Icon
            icon="https://cdn.iconscout.com/icon/premium/png-64-thumb/home-bird-4442448-4104862.png"
            name="Home"
          />
          <Icon
            icon="https://cdn.iconscout.com/icon/free/png-64/hash-1767943-1502279.png"
            name="Explore"
          />
          <Icon
            icon="https://cdn.iconscout.com/icon/free/png-64/bell-3604013-3002450.png"
            name="Notification"
          />
          <Icon
            icon="https://cdn.iconscout.com/icon/free/png-64/mail-1779753-1513567.png"
            name="Messages"
          />
          <Icon
            icon="https://cdn.iconscout.com/icon/free/png-64/bookmark-1618727-1371356.png"
            name="Bookmarks"
          />
          <Icon
            icon="https://cdn.iconscout.com/icon/free/png-64/ink-3255971-2712867.png"
            name="Lists"
          />
          <Icon
            icon="https://cdn.iconscout.com/icon/free/png-64/person-1780868-1514183.png"
            name="Profile"
          />
          <Icon
            icon="https://cdn.iconscout.com/icon/free/png-64/menu-213-470308.png"
            name="More"
          />
        </div>

        <button className="sidebar-tweet-btn">Tweet</button>
        <div className="feather-tweet-btn">
          <img
            src="https://cdn.iconscout.com/icon/free/png-64/quill-2705829-2246340.png"
            alt=""
          />
        </div>

        <Profile
          image="./images/IMG_0786.JPG"
          name="Black Hippy"
          username="@_ameen___"
          icon="fa-solid fa-ellipsis"
        />
      </div>
    </div>
  );
}

export default SideBar;
