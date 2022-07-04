import React from "react";
import { TabBar, VideoCard } from "@components";
import "./MediaInfos.scss";

const MediaInfos = () => {
  return (
    <div className="media-infos-container">
      <VideoCard />
      <TabBar />
    </div>
  );
};

export default MediaInfos;
