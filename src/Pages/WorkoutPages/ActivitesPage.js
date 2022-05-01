import { Fragment } from "react";

import WorkoutDayTracker from "../../components/Workout/WorkoutDayTracker";
import Banner from "../../components/Layout/Banner";
import classes from "./ActivitiesPage.module.css";
import DailyCheckInCard from "../../components/Workout/DailyCheckInCard";
import DailyWorkoutCard from "../../components/Workout/DailyWorkoutCard";

const ActivitiesPage = () => {
  return (
    <Fragment>
      <Banner title="My Activites" />
      <div className={classes.workoutDayTrackerContainer}>
        <WorkoutDayTracker />
      </div>
      <DailyCheckInCard />
      <DailyWorkoutCard />
    </Fragment>
  );
};

export default ActivitiesPage;