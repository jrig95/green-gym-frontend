import { Fragment } from "react";
import classes from "./Form.module.css";

const AddExerciseOverviewForm = () => {
  return (
    <Fragment>
      <div className={classes.formControl}>
        <label>Exercise Title</label>
        <input type="text" />
      </div>
      <div className={classes.formControl}>
        <label>Number of Sets</label>
        <input type="number" min={0} />
      </div>
    </Fragment>
  );
};

export default AddExerciseOverviewForm;
