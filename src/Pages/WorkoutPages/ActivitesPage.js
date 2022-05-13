import { Fragment, useEffect, useState } from "react";

import WorkoutDayTracker from "../../components/Workout/WorkoutDayTracker";
import Banner from "../../components/Layout/Banner";
import classes from "./ActivitiesPage.module.css";
import DailyCheckInCard from "../../components/Workout/DailyCheckInCard";
import DailyWorkoutCard from "../../components/Workout/DailyWorkoutCard";
import DailyChallengeCard from "../../components/Workout/DailyChallengeCard";

const ActivitiesPage = () => {
  const [checkInIsComplete, setCheckInIsComplete] = useState(false);
  const [challengeIsComplete, setChallengeIsComplete] = useState(false);
  
  const checkInCompleteHandler = () => {
    setCheckInIsComplete(true);
  }
  
  const challengeCompleteHandler = () => {
    setChallengeIsComplete(true)
  };

  useEffect(() => {
    console.log(challengeIsComplete);
  }, [challengeIsComplete])

  return (
    <Fragment>
      <Banner title="My Activites" />
      <div className={classes.workoutDayTrackerContainer}>
        <WorkoutDayTracker />
      </div>
      <div className={classes.cardsContainer}>
        <DailyCheckInCard getCompleted={checkInCompleteHandler}/>
        <DailyWorkoutCard />
        <DailyChallengeCard getCompleted={challengeCompleteHandler} />
      </div>
    </Fragment>
  );
};

export default ActivitiesPage;
