import React from "react";
import "./YouTubeVideo.scss";

export default function YouTubeVideo({
  videoId,
}) {
  return (
    <iframe
      src={`${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
