import { Link, useParams } from "react-router-dom";
import { Fragment } from "react";

import { getIdFromSlug } from "../../utils/get-id-from-slug";
import { useProgram } from "../../components/Program/hooks/use-program";
import Button from '../../components/UI/Button';
import classes from "./ProgramPage.module.css";
import Banner from "../../components/Layout/Banner";
import ExerciseOverviewCard from "../../components/Exercise/ExerciseOverviewCard";

const ProgramPage = () => {
  const params = useParams();

  // Get the Id from the slug using routes
  const programId = getIdFromSlug(params);

  // API call
  const { data, isLoading } = useProgram(programId);
  
  let programWorkouts = [];

  if (!isLoading) {
    programWorkouts = data.daily_workouts.map((workout) => {
      return (
        <div key={workout.id} className={classes.workoutCard}>
          <h2>Day {workout.day_number}</h2>
          <p>{workout.description}</p>
          {/* <ExerciseCard exercises={workout.exercises}/> */}
          <ExerciseOverviewCard exercises={workout.exercise_overviews} />
        </div>
      );
    });
  }


  return (
    <Fragment>
      <Banner title={data.program_title} />
      <div className={classes.container}>
        <div className={classes.descriptionContainer}>
          <div className={classes.description}>
            <h3>{data.program_description}</h3>
          </div>
          <img src={data.photo_url} alt={data.program_title} />
        </div>
        <div className={classes.exerciseCardContainer}>
          <div className={classes.programWorkoutsGrid}>{programWorkouts}</div>
        </div>
        <div className={classes.purchaseContainer}>
          <h3>Price: ¥{data.price}</h3>
          <Link to="purchase">
            <Button>Purchase</Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default ProgramPage;
