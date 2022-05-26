import classes from "./WorkoutDayTracker.module.css";
import Card from "../UI/Card";

const WorkoutDayTracker = ({ programTitle }) => {

  const currentDayClasses = `${classes.day} ${classes.dayCurrent}`
  const currentDayNumberClasses = `${classes.dayNumber} ${classes.dayNumberCurrent}`
  const currentPercentageClasses = `${classes.percentage} ${classes.percentageCurrent}`

  const nextDayNumberClasses = `${classes.dayNumber} ${classes.dayNumberNext}`
  const nextPercentageClasses = `${classes.percentage} ${classes.percentageNext}`

  return (
    <div className={classes.container}>
      <h1 className={classes.programName}>{programTitle}</h1>
      <Card className={classes.tracker}>
        <Card className={classes.day}>
          <p className={classes.dayNumber}>Day 1/7</p>
          <p className={classes.percentage}>100%</p>
        </Card>
        <Card className={classes.day}>
          <p className={classes.dayNumber}>Day 1/7</p>
          <p className={classes.percentage}>100%</p>
        </Card>
        <Card className={classes.day}>
          <p className={classes.dayNumber}>Day 1/7</p>
          <p className={classes.percentage}>100%</p>
        </Card>
        <Card className={currentDayClasses}>
          <p className={currentDayNumberClasses}>Day 1/7</p>
          <p className={currentPercentageClasses}>100%</p>
        </Card>
        <Card className={classes.day}>
          <p className={nextDayNumberClasses}>Day 1/7</p>
          <p className={nextPercentageClasses}>0%</p>
        </Card>
      </Card>
    </div>
  );
};

export default WorkoutDayTracker;
