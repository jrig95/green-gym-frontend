import { useState } from "react";
import UpdateExerciseOverview from "./UpdateExerciseOverview";
import { RiEdit2Fill } from "react-icons/ri";
import classes from "./ExerciseOverviewCard.module.css";

const ExerciseOverviewRow = ({ exercise, sets, admin, programId }) => {

  const [updateExerciseOverviewIsShown, setUpdateExerciseOverviewIsShown] =
    useState(false);

  const showUpdateExerciseOverviewHandler = () => {
    setUpdateExerciseOverviewIsShown(true);
  };

  const hideUpdateExerciseOverviewHandler = () => {
    setUpdateExerciseOverviewIsShown(false);
  };

  return (
    <div className={classes.row}>
      <h3 className={classes.exerciseRow}>{exercise.overview_exercise_title}</h3>
      <h3 className={classes.setsRow}>{sets}</h3>
      {admin && (
        <div className={classes.edit}>
          <RiEdit2Fill onClick={showUpdateExerciseOverviewHandler} />
        </div>
      )}
      {updateExerciseOverviewIsShown && (
        <UpdateExerciseOverview onClose={hideUpdateExerciseOverviewHandler} exercise={exercise} programId={programId} />
      )}
    </div>
  );
};

export default ExerciseOverviewRow;
