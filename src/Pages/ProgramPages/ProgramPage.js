import classes from "./ProgramPage.module.css";
import Banner from "../../components/Layout/Banner";
import { Fragment } from "react";

import ExerciseCard from "../../components/Exercise/ExerciseCard";
import Data from "../../program.json";

const ProgramPage = () => {
  // this would be the api call
  console.log(Data);

  const programWorkouts = Data.daily_workouts.map((workout) => {
    return (
      <Fragment>
        <div>
          <h2>{workout.day_number}</h2>
          <ExerciseCard exercises={workout.exercises}/>
        </div>
      </Fragment>
    );
  });

  return (
    <Fragment>
      <Banner title={Data.program_title} />
      <div className={classes.container}>
        <div className={classes.descriptionContainer}>
          <div className={classes.description}>
            <h3>{Data.program_description}</h3>
          </div>
          <img src={Data.program_cover_image} />
        </div>
        <div className={classes.exerciseCardContainer}>
          <div className={classes.programWorkouts}>
            {programWorkouts}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProgramPage;
