import { Fragment } from "react";

import Banner from "../../components/Layout/Banner";
import ExerciseTrackerCard from "../../components/Exercise/ExerciseTrackerCard";
import classes from './DailyWorkoutPage.module.css';

const DailyWorkoutPage = () => {
  return (
    <Fragment>
      <Banner title="Daily Workout" />
      <div className={classes.container}>
        <ExerciseTrackerCard />
      </div>
    </Fragment>
  );
};

export default DailyWorkoutPage;
