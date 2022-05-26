import React from "react";

function Trending({ icon, topic, numbers, trending }) {
  return (
    <div className="topic">
      <div>
        <span style={{ fontSize: "11px" }}>{trending}</span>
        <p style={{ fontWeight: "900", fontSize: "14px" }}>{topic}</p>
        <span style={{ fontSize: "11px" }}>{numbers}</span>
      </div>
      <div>
        <i className={icon}></i>
      </div>
    </div>
  );
}

export default Trending;
