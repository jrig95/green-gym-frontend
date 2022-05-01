import classes from './WorkoutDayTracker.module.css';

const WorkoutDayTracker = () => {
  return <div className={classes.container}>
    <h2>Title</h2>
    <div className={classes.tracker}>
      <div className={classes.day}>
        <p>Day 1/7</p>
        <p>100%</p>
      </div>
    </div>
  </div>
};

export default WorkoutDayTracker;