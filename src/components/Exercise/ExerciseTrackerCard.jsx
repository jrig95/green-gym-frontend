import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useUpdateDailyWorkoutTracker } from "./hooks/use-update-workout-tracker";
import { useUpdateExercise } from "./hooks/use-update-exercise-tracker";
import Button from "../UI/Button";
import classes from "./ExerciseTrackerCard.module.css";
import Card from "../UI/Card";
import ExerciseTrackerCardRow from "./ExerciseTrackerCardRow";
import { useTranslation } from "react-i18next";


// import data from "../../program.json";

const ExerciseTrackerCard = ({
  exerciseIndex,
  exercises,
  exerciseTrackers,
  isLoading,
  programTrackerId,
  workoutTrackerId,
}) => {
  const { t } = useTranslation();
  const updateDailyWorkoutTracker = useUpdateDailyWorkoutTracker();
  const [repsArray, setRepsArray] = useState([]);
  const [numberOfExercisesComplete, setNumberOfExercisesComplete] = useState(0);
  const [formIsComplete, setFormIsCompelte] = useState(true);
  const updateExercise = useUpdateExercise();
  const navigate = useNavigate();

  const addRepsToArrayHandler = (data) => {
    setRepsArray((array) => [...array, data]);
  };

  const onFinishWorkoutHandler = () => {
    // TODO: Sort array so that it is in order of id number.
    const sortedRepsArray = repsArray.sort((a, b) => a.id - b.id);
    // Itterate over the respArray and do mutate for each item in the array
    sortedRepsArray.map((rep) => {
      const exercise_trakcer = {
        id: rep.id,
        program_tracker_id: programTrackerId,
        daily_workout_tracker_id: workoutTrackerId,
        number_of_reps: rep.number_of_reps,
        submitted: true
      };

      // call mutate here
      updateExercise(exercise_trakcer);
    });
    // need program_tracker_id, daily_workout_tracker_id and exercise_trakcer_id (this is already in array)
    // UPDATE -> Workout_complete: true
    const daily_workout_tracker = {
      id: workoutTrackerId,
      program_tracker_id: programTrackerId,
      exercises_completed: true,
    };

    updateDailyWorkoutTracker(daily_workout_tracker)

    // navigate back to activites page
    navigate("/activites/workout-finished");
  };

  useEffect(() => {
    if (numberOfExercisesComplete === exerciseTrackers.length) {
      setFormIsCompelte(false);
    }
  }, [numberOfExercisesComplete, setFormIsCompelte, exerciseTrackers.length])

  if (isLoading) return <p>Loading...</p>;

  const exerciseTrackerCardRows = exercises.map((exercise, index) => {
    let isActive = false;

    if (exerciseIndex < exercises.length) {
      isActive = exercise.id === exercises[exerciseIndex].id;
    }

    const exerciseIsComplete = () => {
      setNumberOfExercisesComplete((prevNum) => prevNum += 1);
    }

    return (
      <ExerciseTrackerCardRow
        key={exercise.id}
        exercise={exercise.exercise_title}
        exerciseQuestion={exercise.exercise_question}
        exerciseTrackerId={exerciseTrackers[index]?.id}
        work={exercise.exercise_work_time}
        rest={exercise.exercise_rest_time}
        rowActive={isActive}
        getRepsData={addRepsToArrayHandler}
        increaseNumberOfExercisesComplete={exerciseIsComplete}
      />
    );
  });

  return (
    <Fragment>
      <Card className={classes.card}>
        <div className={classes.header}>
          <div className={classes.exerciseHeader}>
            <p>{t("exercise_tracker_card_exercise")}</p>
          </div>
          <div className={classes.workHeader}>
            <p>{t("exercise_tracker_card_work")}</p>
          </div>
          <div className={classes.restHeader}>
            <p>{t("exercise_tracker_card_rest")}</p>
          </div>
          <div className={classes.questionHeader}>
            <p>{t("exercise_tracker_card_how_many")}</p>
          </div>
        </div>
        {exerciseTrackerCardRows}
      </Card>
      <div className={classes.buttonContainer}>
        <Button disabled={formIsComplete} onClick={onFinishWorkoutHandler}>{formIsComplete  ?t("exercise_tracker_card_keep_going"): t("exercise_tracker_card_finish_workout")}</Button>
      </div>
    </Fragment>
  );
};

export default ExerciseTrackerCard;
