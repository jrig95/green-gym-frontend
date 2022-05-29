import { useState } from "react";

import { useExercises } from "./hooks/use-exercises";
import StartWorkoutCard from "./WorkOutUI/StartWorkoutCard";
import classes from "./DailyExercises.module.css";
import RestCard from "./WorkOutUI/RestCard";
import Button from "../UI/Button";
import ExerciseVideo from "./ExerciseVideo";
import videoOne from "../../assets/exercise_video_1.mp4";
import videoTwo from "../../assets/exercise_video_2.mp4";
import videoThree from "../../assets/exercise_video_3.mp4";
import videoFour from "../../assets/exercise_video_4.mp4";
import ExerciseTrackerCard from "./ExerciseTrackerCard";

const DailyExercises = () => {
  

  // Hook to get the workout.
  const { data: exerciseData, isLoading: exerciseIsLoading} = useExercises();

  console.log(exerciseData);

  // have a set state for index - start at 0
  const [videoIndex, setvideoIndex] = useState(0);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [showRestScreen, setShowRestScreen] = useState(false);
  const [startWorkout, setStartWorkout] = useState(false);
  const [workoutIsFinish, setWorkoutIsFinished] = useState(false);
  const [firstVideoCompleted, setFirstVideoCompleted] = useState(false);

  // return an array of videos
  // itterate over each video
  // on end load a picture for n seconds then play next video
  const currentVideoEndedHandler = (timer) => {
    const timeRemaining = timer * 1000;
    setvideoIndex((prevIndex) => prevIndex + 1);
    setShowRestScreen(true);
    setFirstVideoCompleted(true);

    setTimeout(() => {
      setShowRestScreen(false);
      setExerciseIndex((prevIndex) => prevIndex + 1);
    }, timeRemaining);
  };

  let videoUls = [];

  const exerciseLength = exerciseData.length;
  const workoutFinish = exerciseLength === videoIndex;


  // this should be a loading spinner
  if (exerciseIsLoading) return <p>Loading...</p>
  
  let rest;

  if (firstVideoCompleted) {
    rest = <RestCard timer={parseInt(exerciseData[videoIndex - 1].exercise_rest_time)} />;
  }

  const currentVideo = (
    <ExerciseVideo
      videoUrl={exerciseData[videoIndex].video_url}
      onEnded={() => currentVideoEndedHandler(parseInt(exerciseData[videoIndex].exercise_rest_time))}
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

export default DailyExercises;
