import { useState } from "react";

import { useExercises } from "./hooks/use-exercises";
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
  // Hook to get the workout.
  const { data: exerciseData, isLoading: exerciseIsLoading} = useExercises();

  if (!exerciseIsLoading) {
    console.log();
  }

  // have a set state for index - start at 0
  const [videoIndex, setvideoIndex] = useState(0);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [showRestScreen, setShowRestScreen] = useState(false);
  const [startWorkout, setStartWorkout] = useState(false);
  const [workoutIsFinish, setWorkoutIsFinished] = useState(false);

  // return an array of videos
  // itterate over each video
  // on end load a picture for n seconds then play next video
  const currentVideoEndedHandler = (timer) => {
    const timeRemaining = timer * 1000;
    setvideoIndex((prevIndex) => prevIndex + 1);
    setShowRestScreen(true);

    setTimeout(() => {
      setShowRestScreen(false);
      setExerciseIndex((prevIndex) => prevIndex + 1);
    }, timeRemaining);
  };

  let videoUls = [];



  const videos = [videoOne, videoTwo, videoThree, videoFour];

  const exerciseLength = videos.length;
  const workoutFinish = exerciseLength === videoIndex;


  // this should be a loading spinner
  if (exerciseIsLoading) return <p>Loading...</p>

  const rest = <RestCard timer={10} />;

  const currentVideo = (
    <ExerciseVideo
      videoUrl={exerciseData[videoIndex].video_url}
      onEnded={() => currentVideoEndedHandler(10)}
    />
  );

  const onStartWorkoutHandler = () => {
    setStartWorkout(true);
  };

  const onFinishWorkoutHandler = () => {
    setWorkoutIsFinished(true);
  };

  const workoutVideo = (
    <div className={classes.videoContainer}>
      {!showRestScreen ? currentVideo : rest}
    </div>
  );

  const startWorkoutButton = (
    <div className={classes.startWorkoutCardContainer}>
      <StartWorkoutCard onStartWorkout={onStartWorkoutHandler} />
    </div>
  );

  const workoutFinishedCard = <div>Workout Finished</div>;

  return (
    <div>
      {startWorkout && workoutVideo}
      {!startWorkout && startWorkoutButton}
      {workoutIsFinish && workoutFinishedCard}
      <ExerciseTrackerCard
        exerciseIndex={exerciseIndex}
        exercises={exerciseData}
        isLoading={exerciseIsLoading}
      />
      <div className={classes.buttonContainer}>
        <Button onClick={onFinishWorkoutHandler}>Finish Workout</Button>
      </div>
    </div>
  );
};

export default DailyWorkout;
