import Card from "../../UI/Card";
import MemberTrackerCardRow from "./MemberTrackerCardRow";
import classes from "./MemberTrackerCard.module.css";

const MemberTrackerCard = ({exercises, exerciseTrackers}) => {

  // console.log(exerciseTrackers);
  // console.log(exercises);
  
  const exerciseRows = exercises.map((exercise, index) => {
    const reps = exerciseTrackers[index].number_of_reps

    // if (!reps) return <p>Cannot find reps for this user. Please refresh.</p>

    return (
      <MemberTrackerCardRow
        key={exercise.id}
        name={exercise.exercise_title}
        work={exercise.exercise_work_time}
        rest={exercise.exercise_rest_time}
        reps={reps}
      />
    );
  });

  return (
    <Card className={classes.card}>
      <div className={classes.header}>
        <div className={classes.exerciseHeader}>
          <p>Exercise</p>
        </div>
        <div className={classes.workHeader}>
          <p>Work</p>
        </div>
        <div className={classes.restHeader}>
          <p>Rest</p>
        </div>
        <div className={classes.repsHeader}>
          <p>User Reps</p>
        </div>
      </div>
      {exerciseRows}
    </Card>
  );
};

export default MemberTrackerCard;
