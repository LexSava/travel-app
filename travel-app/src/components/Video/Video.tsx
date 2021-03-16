import React from "react"
import ReactPlayer from "react-player"
import { SourceProps } from "react-player/base";

const Video = () => {
  const videoSrc = "https://www.youtube.com/watch?v=Idciil6iznE";
  const playerConfig = {
    youtube: {
      playerVars: { showinfo: 0 }
    }
  }
  return (
    <div className="video">
      <ReactPlayer 
        url={videoSrc} 
        config={ playerConfig }
      />
    </div>
  )
}

export default Video