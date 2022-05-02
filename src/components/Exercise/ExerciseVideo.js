import ReactPlayer from "react-player";

import classes from "./ExerciseVideo.module.css";

const ExerciseVideo = () => {
  return (
    <div className={classes.container}>
      <ReactPlayer />
    </div>
  );
};

export default ExerciseVideo;
