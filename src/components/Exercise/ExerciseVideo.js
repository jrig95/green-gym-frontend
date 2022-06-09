import ReactPlayer from "react-player";

import classes from "./ExerciseVideo.module.css";

const ExerciseVideo = ({ videoUrl, onEnded }) => {
  const videoWidth = 640;

  return (
    <div className={classes.container}>
      <ReactPlayer
        playing={true}
        width="100%"
        height="100%"
        style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)" }}
        className={classes.video}
        url={videoUrl}
        controls={true}
        onEnded={onEnded}
      />
    </div>
  );
};

export default ExerciseVideo;
