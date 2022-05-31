import { Fragment, useState } from "react";

import { useDailyWorkoutTracker } from "../Exercise/hooks/use-workout-tracker";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import DailyWorkoutCard from "./DailyWorkoutCard";
import DailyCheckInCard from "./DailyCheckInCard";
import DailyChallengeCard from "./DailyChallengeCard";
import { useUpdateProgramTracker } from "../Exercise/hooks/use-update-program-tracker";
import { useUpdateDailyWorkoutTracker } from "../Exercise/hooks/use-update-workout-tracker";
import classes from "./DailyWorkoutCards.module.css";

const DailyWorkoutCards = ({ programTrackerData, programData, refetchProgramData, refetchProgramTrackerData }) => {
  const navigate = useNavigate();
  const updateProgramTracker = useUpdateProgramTracker();
  const updateDailyWorkoutTracker = useUpdateDailyWorkoutTracker();

  const currentDay = programTrackerData.current_day;
  const dwtDailyCheckInCompleted =
    programTrackerData.daily_workout_trackers[currentDay].dwt_check_in;
  const dwtChallengeCompleted =
    programTrackerData.daily_workout_trackers[currentDay].dwt_daily_challenge;
  const dailyWorkout = programData.daily_workouts[currentDay];
  const dailyWorkoutId = programData.daily_workouts[currentDay].id;
  const dailyWorkoutTracker =
    programTrackerData.daily_workout_trackers[currentDay];
  const dailyWorkoutTrackerId =
    programTrackerData.daily_workout_trackers[currentDay].id;
  const programTrackerId = programTrackerData.id;
  const programImage = programData.photo_url;
  const programTitle = programData.program_title;

  console.log(dailyWorkoutTrackerId);
  // API Call using this id.
  const {data: dailyWorkoutTrackerData } = useDailyWorkoutTracker(programTrackerId, dailyWorkoutTrackerId);

  console.log(dailyWorkoutTrackerData);
  


  const [checkInIsComplete, setCheckInIsComplete] = useState(
    dwtDailyCheckInCompleted
  );
  const [challengeIsComplete, setChallengeIsComplete] = useState(
    dwtChallengeCompleted
  );

  const checkInCompleteHandler = () => {
    setCheckInIsComplete(true);
    // Query call to update the challenge

    // Need - program tracker id
    // Need - daily workout tracker id

    const daily_workout_tracker = {
      id: dailyWorkoutTrackerId,
      program_tracker_id: programTrackerId,
      dwt_check_in: true,
    };

    updateDailyWorkoutTracker(daily_workout_tracker);
  };

  const challengeCompleteHandler = () => {
    setChallengeIsComplete(true);
    const daily_workout_tracker = {
      id: dailyWorkoutTrackerId,
      program_tracker_id: programTrackerId,
      dwt_daily_challenge: true,
    };

    // Query call to update the challenge
    updateDailyWorkoutTracker(daily_workout_tracker);
  };

  const finishDayHandler = () => {
    // API call to update current day + 1
    // create object with programtrackerid and workoutTrackerId
    // find current day
    // write a use update program tracker

    const daily_workout_tracker = {
      id: programTrackerId,
      current_day: currentDay + 1
    }

    updateProgramTracker(daily_workout_tracker);
    refetchProgramTrackerData();
    refetchProgramData();
    // refetch activites page
    navigate("/activities");
  };

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
        />
        <DailyChallengeCard
          dwtChallengeCompleted={dwtChallengeCompleted}
          dailyWorkout={dailyWorkout}
          dailyWorkoutTracker={dailyWorkoutTracker}
          getCompleted={challengeCompleteHandler}
        />
      </div>
      <div className={classes.finishDayButtonContainer}>
        <Button onClick={finishDayHandler}>Finish Day</Button>
      </div>
    </Fragment>
  );
};

export default DailyWorkoutCards;
