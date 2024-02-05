import React from "react";
import "./Sponsor.css";
import netflixlogo from "./Netflix.svg";
import redditlogo from "./Reddit.svg";
import amazonlogo from "./Amazon.svg";
import discordlogo from "./Discord.svg";
import spotifylogo from "./Spotify.svg";

const Sponsor = () => {
  return (
    <div className="container">
      <div>
        <img src={netflixlogo}></img>
      </div>
      <div>
        <img src={redditlogo}></img>
      </div>
      <div>
        <img src={amazonlogo}></img>
      </div>
      <div>
        <img src={discordlogo}></img>
      </div>
      <div>
        <img src={spotifylogo}></img>
      </div>
    </div>
  );
};

export default Sponsor;
