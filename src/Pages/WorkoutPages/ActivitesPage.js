import { Fragment } from "react";

import WorkoutDayTracker from "../../components/Workout/WorkoutDayTracker";
import Banner from "../../components/Layout/Banner";
import classes from "./ActivitiesPage.module.css";

const ActivitiesPage = () => {
  return (
    <Fragment>
      <Banner title="My Activites" />
      <div className={classes.workoutDayTrackerContainer}>
        <WorkoutDayTracker />
      </div>
    </Fragment>
  );
};

export default ActivitiesPage;
