import React from "react";
import Feed from "./Feed";

function Home() {
  return (
    <div className="container">
      <header>
        <h2>Home</h2>

        <img
          src="https://cdn.iconscout.com/icon/free/png-64/glare-2036566-1740220.png"
          alt="glare"
        />
      </header>
      <div className="home">
        <section className="input-section">
          <img src="https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="supreme" />
          <input type="text" placeholder="What's happening?" />
        </section>
        <section className="tweet-footer">
          <div>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/image-268-457720.png"
              alt="media"
            />
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/gif-1779609-1512521.png"
              alt="gif"
            />
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/poll-graph-2815589-2336722.png"
              alt="poll"
            />
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/smiley-3604517-3005016.png"
              alt="smiley"
            />
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/schedule-174-884800.png"
              alt="schedule"
            />
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/location-pin-1589961-1346918.png"
              alt="locaion"
            />
          </div>
          <button className="tweet-btn">Tweet</button>
        </section>
      </div>
      <Feed />
    </div>
  );
}

export default Home;
