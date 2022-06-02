import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LoadingSpinnerButton from "../UI/LoadingSpinnerButton";
import { useIsFetching } from "react-query";
import { useDailyWorkoutTracker } from "../Exercise/hooks/use-workout-tracker";
import Button from "../UI/Button";
import DailyWorkoutCard from "./DailyWorkoutCard";
import DailyCheckInCard from "./DailyCheckInCard";
import DailyChallengeCard from "./DailyChallengeCard";
import { useUpdateProgramTracker } from "../Exercise/hooks/use-update-program-tracker";
import { useUpdateDailyWorkoutTracker } from "../Exercise/hooks/use-update-workout-tracker";
import classes from "./DailyWorkoutCards.module.css";

const DailyWorkoutCards = ({
  programTrackerData,
  programData,
  fiveDayArrayData,
  refetchProgramData,
  refetchProgramTrackerData,
  refetchFiveDayArray
}) => {
  const navigate = useNavigate();
  const isFetching = useIsFetching();

  const updateProgramTracker = useUpdateProgramTracker();
  const updateDailyWorkoutTracker = useUpdateDailyWorkoutTracker();

  const [dayIsFinished, setDayIsFinished] = useState(false);

  // On the last day of a program. This line breaks everything.
  const currentDay = programTrackerData.current_day;

  const dailyWorkout = programData.daily_workouts[currentDay];
  const dailyWorkoutId = programData.daily_workouts[currentDay].id;
  const dailyWorkoutTracker =
    programTrackerData.daily_workout_trackers[currentDay];
  const dailyWorkoutTrackerId =
    programTrackerData.daily_workout_trackers[currentDay].id;
  const programTrackerId = programTrackerData.id;
  const programImage = programData.photo_url;
  const programTitle = programData.program_title;

  // Get Daily Workout Tracker
  const { data: dailyWorkoutTrackerData, refetch: refetchDailyWorkoutTracker } =
    useDailyWorkoutTracker(programTrackerId, dailyWorkoutTrackerId);

  // console.log(dailyWorkoutTrackerData);

  const dwtDailyCheckInCompleted = dailyWorkoutTrackerData.dwt_check_in;
  const dwtChallengeCompleted = dailyWorkoutTrackerData.dwt_daily_challenge;
  const dwtExercisesCompleted = dailyWorkoutTrackerData.exercises_completed;

  // console.log(dwtChallengeCompleted);

  // const [checkInIsComplete, setCheckInIsComplete] = useState(
  //   dwtDailyCheckInCompleted
  // );
  // const [challengeIsComplete, setChallengeIsComplete] = useState(
  //   dwtChallengeCompleted
  // );

  // Have a use effect that automatically refetched data.
  // what changes that would anable the useEffect to fire.

  const checkInCompleteHandler = () => {
    const daily_workout_tracker = {
      id: dailyWorkoutTrackerId,
      program_tracker_id: programTrackerId,
      dwt_check_in: true,
    };

    updateDailyWorkoutTracker(daily_workout_tracker);
    refetchProgramData();
    refetchProgramTrackerData();
    refetchDailyWorkoutTracker();
  };

  useEffect(() => {
    refetchProgramData();
    refetchProgramTrackerData();
    refetchDailyWorkoutTracker();
    refetchFiveDayArray();
  }, [dailyWorkoutTrackerData, programData, programTrackerData, fiveDayArrayData]);

  const challengeCompleteHandler = () => {
    // setChallengeIsComplete(true);
    const daily_workout_tracker = {
      id: dailyWorkoutTrackerId,
      program_tracker_id: programTrackerId,
      dwt_daily_challenge: true,
    };

    // Query call to update the challenge

    updateDailyWorkoutTracker(daily_workout_tracker);
    refetchProgramData();
    refetchProgramTrackerData();
    refetchDailyWorkoutTracker();
  };

  const finishDayHandler = () => {
    // const program_tracker = {
    //   id: programTrackerId,
    //   current_day: currentDay + 1,
    //   // completed: true,
    // };

    const daily_workout_tracker = {
      id: dailyWorkoutTrackerId,
      program_tracker_id: programTrackerId,
      completed: true,
    };

    // updateProgramTracker(program_tracker);

    updateDailyWorkoutTracker(daily_workout_tracker);

    // TODO: Workout how to refresh page to show day change.
    refetchDailyWorkoutTracker();
    refetchProgramTrackerData();
    refetchProgramData();
    setDayIsFinished(true);

    // TODO: Add codition to check if it is the final day.
    console.log(currentDay);
    console.log(programData.daily_workouts.length);

    // Fi program length - 1 is the same as current day.
    // Redirect user to another page.
    if (currentDay === (programData.daily_workouts.length + 1)) {
      navigate("/");
    }
  };

  // All must be true to be able to slect finish day
  const dayFinished =
    dwtDailyCheckInCompleted && dwtChallengeCompleted && dwtExercisesCompleted;

  return (
    <Fragment>
      <div className={classes.cardsContainer}>
        <DailyCheckInCard
          dwtDailyCheckInCompleted={dwtDailyCheckInCompleted}
          dailyWorkoutTracker={dailyWorkoutTracker}
          getCompleted={checkInCompleteHandler}
        />
        <DailyWorkoutCard
          dailyWorkout={dailyWorkout}
          dailyWorkoutId={dailyWorkoutId}
          dailyWorkoutTrackerId={dailyWorkoutTrackerId}
          dailyWorkoutTracker={dailyWorkoutTracker}
          programImage={programImage}
          programTitle={programTitle}
          dwtExercisesCompleted={dwtExercisesCompleted}
        />
        <DailyChallengeCard
          dwtChallengeCompleted={dwtChallengeCompleted}
          dailyWorkout={dailyWorkout}
          dailyWorkoutTracker={dailyWorkoutTracker}
          getCompleted={challengeCompleteHandler}
        />
      </div>
      <div className={classes.finishDayButtonContainer}>
        <Button onClick={finishDayHandler} disabled={!dayFinished || isFetching}>
          {isFetching ? <LoadingSpinnerButton /> : "Finish Day"}
        </Button>
      </div>
    </Fragment>
  );
};

export default DailyWorkoutCards;
