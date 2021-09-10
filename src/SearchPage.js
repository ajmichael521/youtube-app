import React from "react";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://i.ytimg.com/vi/U3olJWzIKvY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqthSQTBs3ZjrahHd6_VsoX9gmFA"
        Channel="Batman"
        verified=""
        subs="659k"
        noOfVideos={321}
        description="Watch Now"
      />
      <hr />
      <VideoRow
        image="https://i.ytimg.com/vi/U3olJWzIKvY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqthSQTBs3ZjrahHd6_VsoX9gmFA"
        Channel="Batman"
        verified=""
        subs="659k"
        Views="321 M"
        title="THE BATMAN Official Trailer 4K (2021) Ultra HD"
        timestamp="34minutes ago"
        description="Batman Trailer"
      />
      <VideoRow
        image="https://i.ytimg.com/vi/zcR0PWGfUhs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDpUWW8lk0wzv0VsgA4JrT6wiWHXg"
        Channel="Ayra starr"
        verified=""
        subs="659k"
        Views="321 M"
        title="Ayra Starr - Bloody Samaritan (Official Music Video)"
        timestamp="34minutes ago"
        description="Music video"
      />
      <VideoRow
        image="https://i.ytimg.com/vi/qXeuIxhv5YQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9X_0hrdzzusqcNLpU2P2PYjXn1Q"
        Channel="Batman"
        verified=""
        subs="659k"
        Views="321 M"
        title="Gyakie - NEED ME"
        timestamp="34minutes ago"
        description="Music video"
      />
      <VideoRow
        image="https://i.ytimg.com/vi/nBWR4K-jhP0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC67kN82L-eZK2DqWG3me0IqN5BYw"
        Channel="Batman"
        verified=""
        subs="659k"
        Views="321 M"
        title="Designing the future | Marc Lichte & the Audi skysphere..."
        timestamp="34minutes ago"
        description="Audi cars"
      />
      <VideoRow
        image="https://i.ytimg.com/vi/HmQuT0unrk0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfZFy0GFlQgkD8mXfHd2ZKUe2S0g"
        Channel="Batman"
        verified=""
        subs="659k"
        Views="321 M"
        title="Why Apple Wants Your Old iPhone"
        timestamp="34minutes ago"
        description="Iphone phones"
      />
    </div>
  );
}

export default SearchPage;
