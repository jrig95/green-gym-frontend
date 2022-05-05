import Card from "../../UI/Card";
import MemberTrackerCardRow from "./MemberTrackerCardRow";
import classes from "./MemberTrackerCard.module.css";

const MemberTrackerCard = () => {


  // const exerciseRows = exercises.map((exercise) => {
  //   return (
  //     <ExerciseRow
  //       name={exercise.exercise_title}
  //       work={exercise.exercise_work_time}
  //       rest={exercise.exercise_rest_time}
  //     />
  //   );
  // });

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
      </div>
      <MemberTrackerCardRow />
      <MemberTrackerCardRow />
      <MemberTrackerCardRow />
      <MemberTrackerCardRow />
      <MemberTrackerCardRow />
      {/* {exerciseRows} */}

    </Card>
  );
};

export default MemberTrackerCard;
