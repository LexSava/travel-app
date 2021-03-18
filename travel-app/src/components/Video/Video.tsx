import React from "react";
import ReactPlayer from "react-player";
import { SourceProps } from "react-player/base";
import "./Video.scss";

type VideoProps = {
  videoSrc: string;
};

const Video = ({ videoSrc }: VideoProps) => {
  //const videoSrc = 'https://www.youtube.com/watch?v=Idciil6iznE';
  const playerConfig = {
    youtube: {
      playerVars: { showinfo: 0 },
    },
  };
  return (
    <div className="video">
      <ReactPlayer url={videoSrc} config={playerConfig} width="100%" />
    </div>
  );
};

export default Video;
