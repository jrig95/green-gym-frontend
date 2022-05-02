import { useState } from "react";

import classes from './DailyWorkout.module.css';
import RestCard from "./RestCard";
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
    setExerciseIndex((prevIndex) => prevIndex + 1);
    setShowRestScreen(true);

    setTimeout(() => {
      setShowRestScreen(false);
    }, timeRemaining);
  };

  // useEffect(() => {
  //   console.log(showRestScreen, 'line 26')
  //   console.log(videoIndex, 'line 27')
  // }, [showRestScreen])

  const videos = [videoOne, videoTwo, videoThree, videoFour];

  // have a set state for show rest card (this could be a button??)
  // it can have a timer and when the timer finishes it fires an event
  // when the user clicks on the button the next video will play.
  // check to make sure their is another video.

  const rest = <RestCard timer={2} />;

  const currentVideo = (
    <ExerciseVideo
      videoUrl={videos[videoIndex]}
      onEnded={() => currentVideoEndedHandler(2)}
    />
  );

  return (
    <div>
      <div className={classes.videoContainer}>{!showRestScreen ? currentVideo : rest}</div>
      <ExerciseTrackerCard />
    </div>
  );
};

export default DailyWorkout;
