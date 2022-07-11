import React, { useState, useEffect } from "react";
import { TabBar, MediaCardInfo } from "@components";
import "./MediaInfos.scss";
import { useParams } from "react-router-dom";
import { fetchMovieInfo } from "@services/apiRequest/fetchMovie";
import { fetchMusicInfo } from "@services/apiRequest/fetchMusic";

const MediaInfos = () => {
  const { mediaId, mediaCat } = useParams();

  const [mediaInfo, setMediaInfo] = useState();
  useEffect(() => {
    if (mediaCat === "film") fetchMovieInfo(mediaId, setMediaInfo);
    if (mediaCat === "musique") fetchMusicInfo(mediaId, setMediaInfo);
  }, []);

  return (
    <div className="mediaInfoPage">
      {mediaInfo && <MediaCardInfo media={mediaInfo} />}
      <TabBar />
    </div>
  );
};

export default MediaInfos;
