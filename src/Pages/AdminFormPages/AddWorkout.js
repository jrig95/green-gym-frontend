import { useLocation } from "react-router-dom";
import { Fragment, useState } from "react";

import classes from "./AddWorkout.module.css";
import AdminBanner from "../../components/AdminComponents/Layout/AdminBanner";
import AddWorkoutForm from "../../components/Forms/AddWorkoutForm";
import AdminFormTemplate from "./AdminFormTemplate";

const AddWorkoutPage = () => {
  const { state } = useLocation();

  const { pageNumber } = state;

  const dayNumberToInt = parseInt(pageNumber);

  const [currentArrayIndex, setCurrentArrayIndex] = useState(1);

  const numberOfWorkoutsArray = Array.from({ length: dayNumberToInt }, (_, i) => i + 1);

  console.log(dayNumberToInt, "dayNumberToInt - line 18")
  console.log(typeof dayNumberToInt, "type of")
  console.log(numberOfWorkoutsArray, "number of Workouts Array");

  const changeCurrentArrayIndexHandler = () => {
    setCurrentArrayIndex((currentValue) => currentValue + 1);
  };

  const renderForms = currentArrayIndex <= numberOfWorkoutsArray.length;

  const addWorkoutForms = numberOfWorkoutsArray.map((num) => {
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
        {renderForms && (
          <div className={classes.formsContainer}>{addWorkoutForms} </div>
        )}
        {!renderForms && (
          <p>
            There will be a review of the current exercise. Can edit if needed.
          </p>
        )}
      </AdminFormTemplate>
    </Fragment>
  );
};

export default AddWorkoutPage;
