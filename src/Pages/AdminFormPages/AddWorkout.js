import { Fragment, useState } from "react";

import classes from "./AddWorkout.module.css";
import AdminBanner from "../../components/AdminComponents/Layout/AdminBanner";
import AddWorkoutForm from "../../components/Forms/AddWorkoutForm";
import AdminFormTemplate from "./AdminFormTemplate";

const AddWorkoutPage = () => {
  const [currentArrayIndex, setCurrentArrayIndex] = useState(1);
  const array = [1, 2, 3, 4, 5];

  const changeCurrentArrayIndexHandler = () => {
    setCurrentArrayIndex((currentValue) => currentValue + 1);
  };

  const addWorkoutForms = array.map((num) => {
    if (currentArrayIndex === num) {
      return (
        <div key={num} className={classes.singleFormContainer}>
          <AddWorkoutForm
            dayNumber={num}
            onAddWorkout={changeCurrentArrayIndexHandler}
          />
        </div>
      );
    }
  });

  return (
    <Fragment>
      <AdminBanner />
      <AdminFormTemplate>
        <div className={classes.formsContainer}>{addWorkoutForms} </div>
      </AdminFormTemplate>
    </Fragment>
  );
};

export default AddWorkoutPage;
