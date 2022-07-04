import React from "react";
import ReactPlayer from "react-player";
import "./MediaVideo.scss";

export const MediaVideo = () => {
  const externalSource = "https://www.youtube.com/watch?v=ysz5S6PUM-U";

  // const internalSource = "./billet.mp4";

  return (
    <div className="player-container">
      <ReactPlayer
        url={externalSource}
        controls
        playing
        muted
        width="100%"
        height="100%"
        className="player-video"
      />
    </div>
  );
};
