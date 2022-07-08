// import React, { useState, useEffect } from "react";
import { TabBar, VideoCard } from "@components";
import "./MediaInfos.scss";
// import { useParams } from "react-router-dom";
// import { fetchMovieInfo } from "@services/apiRequest/fetchMovie";

const MediaInfos = () => {
  // const { mediaId } = useParams();

  // const [movieInfo, setMovieInfo] = useState();
  // useEffect(() => {
  //   fetchMovieInfo(mediaId, setMovieInfo);
  // }, []);

  return (
    <div className="media-infos-container">
      <VideoCard />
      <TabBar />
    </div>
  );
};

export default MediaInfos;
