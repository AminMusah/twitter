import React from "react";
import Followers from "./Followers";
import Trending from "./Trending";
import Messages from "./Messages";
function Trends() {
  return (
    <div>
      <div className="trends">
        <section className="search-bar">
          <img
            className="fa-search"
            src="https://cdn.iconscout.com/icon/free/png-64/search-3612105-3017823.png"
            alt="magnifying glass"
          />
          <input type="text" placeholder="Search Twitter" />
        </section>
        <section className="trending-topics">
          <h2>Trends for you</h2>
          <Trending
            trending="Music ‧ Trending"
            topic="OKlama"
            numbers="1564 tweets"
            icon="fa-solid fa-ellipsis"
          />
          <Trending
            trending="Music ‧ Trending"
            topic="#Kendrick Lamar"
            numbers="9,264 tweets"
            icon="fa-solid fa-ellipsis"
          />
          <Trending
            trending="Music ‧ Trending"
            topic="#MrMoraleAndTheBigSteppers"
            numbers="9,239 tweets"
            icon="fa-solid fa-ellipsis"
          />
          <Trending
            trending="Sports ‧ Trending"
            topic="Messi is the GOAT"
            numbers="4.9k tweets"
            icon="fa-solid fa-ellipsis"
          />
          <Trending
            trending="Trending in Ghana"
            topic="Kumasi"
            numbers="1,564 tweets"
            icon="fa-solid fa-ellipsis"
          />
          <Trending
            trending="Trending"
            topic="Quran"
            numbers="25.5k tweets"
            icon="fa-solid fa-ellipsis"
          />
          <Trending
            trending="Trending"
            topic="To the Moon"
            numbers="4,342 tweets"
            icon="fa-solid fa-ellipsis"
          />
          <Trending
            trending="Sports ‧ Trending"
            topic="Neymar"
            numbers="90.3k tweets"
            icon="fa-solid fa-ellipsis"
          />
          <Trending
            trending="Technology ‧ Trending"
            topic="Apple Pay"
            numbers="15.6k tweets"
            icon="fa-solid fa-ellipsis"
          />
          <Trending
            trending="Gaming ‧ Trending"
            topic="#GodOfWarRanorak"
            numbers="14.4k tweets"
            icon="fa-solid fa-ellipsis"
          />
          <p className="load-more">
            <a href="/">Show More</a>
          </p>
        </section>
        <section className="followers-container">
          <h3 className="followers-topic">Who to Follow</h3>
          <Followers image="./images/IMG_2395.JPG" name="Ali" username="ali_" />
          <Followers image="./images/IMG_0786.JPG" name="Max" username="maxi" />
          <Followers image="./images/IMG_1974.JPG" name="JNR" username="_jnr" />
          <p className="load-more">
            <a href="/">Show More</a>
          </p>
        </section>

        <footer className="footer-info">
          <div>
            <a href="/">Terms of Services</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Cookie Policy</a>
            <a href="/">Accessibility</a>
            <a href="/">Ads Info</a>
            <a href="/">More</a>
            <span style={{ margin: "0 5px 0 -5px " }}>‧‧‧</span>
            <span className="copy-right">© 2022 Twitter, Inc</span>
          </div>
        </footer>
        <Messages />
      </div>
    </div>
  );
}

export default Trends;
