import { Link, useParams } from "react-router-dom";
import { Fragment, useContext } from "react";

import AuthContext from "../../context/AuthContext";
import ProgramWorkoutDetails from "../../components/Program/ProgramWorkoutDetails";
import { getIdFromSlug } from "../../utils/get-id-from-slug";
import { useProgram } from "../../components/Program/hooks/use-program";
import Button from "../../components/UI/Button";
import classes from "./ProgramPage.module.css";
import Banner from "../../components/Layout/Banner";
import ExerciseOverviewCard from "../../components/Exercise/ExerciseOverviewCard";

const ProgramPage = () => {
  const params = useParams();

  // TODO: Add modal to update the program details

  // TODO: Get user from context and check if admin
  const authCtx = useContext(AuthContext);
  const admin = authCtx.isAdmin;

  // TODO: add edit buttons to all parts - program / Daily workouts / exercises / exercise overview

  // Approach one - use current end point
  // Approach two - update to Dailyworkout end point - creating a new component. Sean will need to

  // Get the Id from the slug using routes
  const programId = getIdFromSlug(params.programId);

  // Get program data
  const { data: programData, isLoading: programIsLoading } =
    useProgram(programId);

  let programWorkouts = [];

  // have an aditional component that will be displayed with daily workout endpoint
  // Create a daily workouts component

  if (!programIsLoading) {
    programWorkouts = programData.daily_workouts.map((workout) => {
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

  // TODO: If admin create another itteration shoing all exercises.

  let newProgramWorkouts = [];

  if (!programIsLoading) {
    newProgramWorkouts = programData.daily_workouts.map((workout) => {
      console.log(workout.id);
      return (
        <ProgramWorkoutDetails programId={programId} dailyWorkoutId={workout.id} admin={admin} />
      );
    });
  }

  return (
    <Fragment>
      <Banner title={programData.program_title} />
      <div className={classes.container}>
        {admin && <Button color="blue">Edit Program</Button>}
        <div className={classes.descriptionContainer}>
          <div className={classes.description}>
            <h3>{programData.program_description}</h3>
          </div>
          <img src={programData.photo_url} alt={programData.program_title} />
        </div>
        <div className={classes.exerciseCardContainer}>
          <div className={classes.programWorkoutsGrid}>{newProgramWorkouts}</div>
        </div>
        {/* {newProgramWorkouts} */}
        <div className={classes.purchaseContainer}>
          <h3>Price: ¥{programData.price}</h3>
          <Link to="purchase">
            <Button>Purchase</Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default ProgramPage;
