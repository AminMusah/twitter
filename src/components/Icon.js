import React from "react";

function Icon({ name, icon }) {
  return (
    <div className="icons">
      <img src={icon} alt="icons" />
      <span>{name}</span>
    </div>
  );
}

export default Icon;
