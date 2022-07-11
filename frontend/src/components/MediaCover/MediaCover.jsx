import React from "react";
import ReactPlayer from "react-player";
import "./MediaCover.scss";

export const MediaCover = ({ url, isMovie }) => {
  // const internalSource = "./billet.mp4";

  return (
    <div className="mediaCover">
      {!isMovie && <img src={(url, isMovie)} alt="" />}
      {isMovie && (
        <ReactPlayer
          url={url}
          controls
          playing
          muted
          width="100%"
          height="100%"
          className="player-video"
        />
      )}
    </div>
  );
};
