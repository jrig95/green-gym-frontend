import ReactPlayer from "react-player";
import { useState } from "react";

import classes from "./ExerciseVideo.module.css";

const ExerciseVideo = ({ videoUrl, onEnded, workoutDuration }) => {
  // const videoWidth = 640;
  const [videoIsPlaying, setVideoIsPlaying] = useState(true);
  setTimeout(() => {
    setVideoIsPlaying(false);
  }, 1000 * workoutDuration - 1000 * 10);
  return (
    <div className={classes.container}>
      <ReactPlayer
        playing={true}
        width="100%"
        height="100%"
        style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)" }}
        className={classes.video}
        url={videoUrl}
        loop={videoIsPlaying}
        onEnded={onEnded}
      />
    </div>
  );
};

export default ExerciseVideo;
