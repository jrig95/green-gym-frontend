import { Fragment } from "react";

import Banner from "../../components/Layout/Banner";
import classes from './DailyWorkoutPage.module.css';
import DailyWorkout from "../../components/Exercise/DailyWorkout";

const DailyWorkoutPage = () => {
  return (
    <Fragment>
      <Banner title="Daily Workout" />
      <div className={classes.container}>
        <DailyWorkout />
      </div>
    </Fragment>
  );
};

export default DailyWorkoutPage;
