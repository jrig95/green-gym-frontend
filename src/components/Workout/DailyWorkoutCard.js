import { Link } from "react-router-dom";

import { slugify } from "../../utils/slugify";
import classes from "./DailyWorkoutCard.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const DailyWorkoutCard = ({
  dailyWorkout,
  programImage,
  programTitle,
  dailyWorkoutId,
  dailyWorkoutTrackerId,
  dwtExercisesCompleted,
}) => {
  const slug = slugify(
    `${programTitle}-day-${dailyWorkout.day_number}-${dailyWorkoutId}-${dailyWorkoutTrackerId}`
  );

  // Conditionally display a message. But this always seems to be false
  const buttonMessage = dwtExercisesCompleted ? "Workout Finished" : "Today's Workout";
  const blueButton = dwtExercisesCompleted ? "blue" : "";

  return (
    <Card className={classes.container}>
      <div className={classes.title}>
        <h1>Daily Workout: Day {dailyWorkout.day_number}</h1>
      </div>
      <div className={classes.image}>
        <img src={programImage} alt="Program Image" />
      </div>
      <div className={classes.buttonContainer}>
        <Link to={`/activities/${slug}`}>
          <Button color={blueButton}>{buttonMessage}</Button>
        </Link>
      </div>
    </Card>
  );
};

export default DailyWorkoutCard;
