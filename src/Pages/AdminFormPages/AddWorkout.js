import { Fragment, useState } from "react";

import classes from "./AddWorkout.module.css";
import AdminBanner from "../../components/AdminComponents/Layout/AdminBanner";
import AddWorkoutForm from "../../components/Forms/AddWorkoutForm";
import AdminFormTemplate from "./AdminFormTemplate";

const AddWorkoutPage = () => {
  const [currentArrayIndex, setCurrentArrayIndex] = useState(1);
  const array = [1, 2];

  const changeCurrentArrayIndexHandler = () => {
    setCurrentArrayIndex((currentValue) => currentValue + 1);
  };

  const renderForms = currentArrayIndex <= array.length;

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
        {renderForms && <div className={classes.formsContainer}>{addWorkoutForms} </div>}
        {!renderForms && <p>There will be a review of the current exercise. Can edit if needed.</p>}
      </AdminFormTemplate>
    </Fragment>
  );
};

export default AddWorkoutPage;
