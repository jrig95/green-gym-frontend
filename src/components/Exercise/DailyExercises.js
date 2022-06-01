import { useEffect, useState } from "react";

import { useExerciseTrackers } from "./hooks/use-exercise-trackers";
import { useExercises } from "./hooks/use-exercises";
import StartWorkoutCard from "./WorkOutUI/StartWorkoutCard";
import classes from "./DailyExercises.module.css";
import WorkoutFinishedCard from "./WorkOutUI/WorkoutFinishedCard";
import RestCard from "./WorkOutUI/RestCard";
import Button from "../UI/Button";
import ExerciseVideo from "./ExerciseVideo";
import ExerciseTrackerCard from "./ExerciseTrackerCard";

const DailyExercises = ({
  userData,
  programId,
  programTrackerId,
  workoutId,
  workoutTrackerId,
}) => {
  // Hook to get the workout.
  const { data: exerciseData, isLoading: exerciseIsLoading } = useExercises(
    programId,
    workoutId
  );

  // Hook to get the exercise tracker
  const { data: exerciseTrackersData } = useExerciseTrackers(
    programTrackerId,
    workoutTrackerId
  );

  // console.log(exerciseData);

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

 

  // useEffect(() => {
  //   console.log(workoutFinish, "workoutFinish");
  //   console.log(exerciseData.length, "exerciseData.length");
  //   console.log(videoIndex, "video index");
  // }, [videoIndex]);

  // this should be a loading spinner
  if (exerciseIsLoading) return <p>Loading...</p>;

  let rest;

  const exerciseLength = exerciseData.length;
  const workoutFinish = exerciseLength === videoIndex;

  if (firstVideoCompleted) {
    rest = (
      <RestCard
        timer={parseInt(exerciseData[videoIndex - 1].exercise_rest_time)}
      />
    );
  }

  // Add error handler if video index
  let currentVideo;

  // FOR TEST PURPOSES CAN DELTE

  // Won't load if page refresh
  if (exerciseData.length > videoIndex) {
    currentVideo = (
      <ExerciseVideo
        videoUrl={exerciseData[videoIndex].video_url}
        onEnded={() =>
          currentVideoEndedHandler(
            parseInt(exerciseData[videoIndex].exercise_rest_time)
          )
        }
      />
    );
  }

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

  // const workoutFinishedCard = <div>Workout Finished</div>;

  return (
    <div>
      {startWorkout && !workoutFinish && workoutVideo}
      {!startWorkout && startWorkoutButton}
      {workoutFinish && <WorkoutFinishedCard />}
      <ExerciseTrackerCard
        exerciseIndex={exerciseIndex}
        exercises={exerciseData}
        exerciseTrackers={exerciseTrackersData}
        programTrackerId={programTrackerId}
        workoutTrackerId={workoutTrackerId}
        isLoading={exerciseIsLoading}
      />
    </div>
  );
};

export default DailyExercises;
