import React from "react";

function Followers({ name, image, username }) {
  return (
    <div>
      <section className="follow">
        <div className="followers-profile">
          <div>
            <img src={image} alt="supreme" />
          </div>
          <div>
            <p style={{ fontWeight: "900" }}>{name}</p>
            <p style={{ color: "#888", fontSize: "12px", marginTop: "-3px" }}>
              {username}
            </p>
          </div>
          <button className="follow-btn">Follow</button>
        </div>
      </section>
    </div>
  );
}

export default Followers;
