import "./Video.scss";
import React from "react";
import ReactPlayer from "react-player";
import { SourceProps } from "react-player/base";


type VideoProps = {
  videoSrc: string;
};

const Video = ({ videoSrc }: VideoProps) => {

  const playerConfig = {
    youtube: {
      playerVars: { showinfo: 0, controls: 1 },
    },
  };
    return (
    <div className="video">
      <ReactPlayer className='video-player' url={videoSrc} config={playerConfig} width="100%" height="100%" />
    </div>
  );
};

export default Video;
