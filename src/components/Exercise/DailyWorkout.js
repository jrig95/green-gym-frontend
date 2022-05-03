import { useState } from "react";

import StartWorkoutCard from "./WorkOutUI/StartWorkoutCard";
import classes from "./DailyWorkout.module.css";
import RestCard from "./WorkOutUI/RestCard";
import Button from "../UI/Button";
import ExerciseVideo from "./ExerciseVideo";
import videoOne from "../../assets/exercise_video_1.mp4";
import videoTwo from "../../assets/exercise_video_2.mp4";
import videoThree from "../../assets/exercise_video_3.mp4";
import videoFour from "../../assets/exercise_video_4.mp4";
import ExerciseTrackerCard from "./ExerciseTrackerCard";

const DailyWorkout = () => {
  // have a set state for index - start at 0
  const [videoIndex, setvideoIndex] = useState(0);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [showRestScreen, setShowRestScreen] = useState(false);

  // return an array of videos
  // itterate over each video
  // on end load a picture for n seconds then play next video

  const currentVideoEndedHandler = (timer) => {
    const timeRemaining = timer * 1000;
    setvideoIndex((prevIndex) => prevIndex + 1);
    // setExerciseIndex((prevIndex) => prevIndex + 1);
    setShowRestScreen(true);

    setTimeout(() => {
      setShowRestScreen(false);
      setExerciseIndex((prevIndex) => prevIndex + 1);
    }, timeRemaining);
  };

  const videos = [videoOne, videoTwo, videoThree, videoFour];

  const rest = <RestCard timer={10} />;

  const currentVideo = (
    <ExerciseVideo
      videoUrl={videos[videoIndex]}
      onEnded={() => currentVideoEndedHandler(10)}
    />
  );

  return (
    <div>
      <StartWorkoutCard />
      <div className={classes.videoContainer}>
        {!showRestScreen ? currentVideo : rest}
      </div>
      <ExerciseTrackerCard exerciseIndex={exerciseIndex} />
      <div className={classes.buttonContainer}>
        <Button>Finish Workout</Button>
      </div>
    </div>
  );
};

export default DailyWorkout;
