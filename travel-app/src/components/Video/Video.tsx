import "./Video.scss";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { SourceProps } from "react-player/base";
import { ArrowsFullscreen, FullscreenExit } from "react-bootstrap-icons";


type VideoProps = {
  videoSrc: string;
};

const Video = ({ videoSrc }: VideoProps) => {

  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const playerConfig = {
    youtube: {
      playerVars: { showinfo: 0 },
    },
  };
  const openFullscreen = (e: any): void => {
    const galleryElement: any = e.target.parentElement;
    if (galleryElement.requestFullscreen) {
      setFullScreen(true);
      galleryElement.requestFullscreen();
    }
  };

  const closeFullscreen = (): void => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      setFullScreen(false);
    }
  };

  const fullScreenIcon: React.ReactNode = fullScreen ? (
    <FullscreenExit
      className="fullscreen-icon fullscreen-icon_exit"
      onClick={closeFullscreen}
    />
  ) : (
    <ArrowsFullscreen className="fullscreen-icon" onClick={openFullscreen} />
  );

  return (
    <div className="video">
      {fullScreenIcon}
      <ReactPlayer className='video-player' url={videoSrc} config={playerConfig} width="100%" height="100%" />
    </div>
  );
};

export default Video;
