import React, { useState, useEffect } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

function Feed() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      <TwitterTweetEmbed tweetId={"1527628109989699584"} /> ? (
        setloading(false)
      ) : (
        setloading(true)
      );
    }, 5000);
  }, []);
  return (
    <div className="feed">
      {loading && <div className="loader"></div>}
      <TwitterTweetEmbed tweetId={"1527628109989699584"} />;
      <TwitterTweetEmbed tweetId={"1527692714686525440"} />
      <TwitterTweetEmbed tweetId={"1526908472461340673"} />
      <TwitterTweetEmbed tweetId={"1527758575531184128"} />
      <TwitterTweetEmbed tweetId={"1527646804065632256"} />
      <TwitterTweetEmbed tweetId={"1527330555896815623"} />
    </div>
  );
}

export default Feed;
