import Button from "../UI/Button";
import AdminFormCard from "../../components/Forms/AdminFormCard";
import classes from "./Form.module.css";
import useInput from "./Hooks/use-input";

const UpdateWorkoutForm = ({ onClose, workoutData }) => {
  // how to get this once. then keep it the same.

  const textNotEmpty = (value) => value !== "";

  console.log(workoutData);

  const {
    value: descriptionValue,
    isValid: descriptionIsValid,
    hasError: descriptionHasError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    rest: resetDescription,
  } = useInput(textNotEmpty, workoutData.description);

  const {
    value: dailyChallengeValue,
    isValid: dailyChallengeIsValid,
    hasError: dailyChallengeHasError,
    valueChangeHandler: dailyChallengeChangeHandler,
    inputBlurHandler: dailyChallengeBlurHandler,
    reset: resetDailyChallenge,
  } = useInput(textNotEmpty, workoutData.daily_challenge_title);

  const {
    value: dailyChallengeDescriptionValue,
    isValid: dailyChallengeDescriptionIsValid,
    hasError: dailyChallengeDescriptionHasError,
    valueChangeHandler: dailyChallengeDescriptionChangeHandler,
    inputBlurHandler: dailyChallengeDescriptionBlurHandler,
    reset: restDailyChallengeDescription,
  } = useInput(textNotEmpty, workoutData.daily_challenge_description);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const daily_workout = {
      description: descriptionValue,
      daily_challenge_title: dailyChallengeValue,
      daily_challenge_description: dailyChallengeDescriptionValue,
    };

    console.log(daily_workout);
  };

  const descriptionClasses = descriptionHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const dailyChallengeClasses = dailyChallengeHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const dailyChallengeDescriptionClassses = dailyChallengeDescriptionHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const formIsValid =
    descriptionIsValid &&
    dailyChallengeIsValid &&
    dailyChallengeDescriptionIsValid;

  return (
    <AdminFormCard title={`Update Day ${workoutData.day_number}`}>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.controlGroup}>
          <div className={descriptionClasses}>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              value={descriptionValue}
              onChange={descriptionChangeHandler}
              onBlur={descriptionBlurHandler}
            />
            {descriptionHasError && (
              <p className={classes.errorText}>Must include a description</p>
            )}
          </div>
          <div className={dailyChallengeClasses}>
            <label htmlFor="daily_challenge">Daily Challenge</label>
            <input
              type="text"
              id="daily_challenge"
              value={dailyChallengeValue}
              onChange={dailyChallengeChangeHandler}
              onBlur={dailyChallengeBlurHandler}
            />
            {dailyChallengeHasError && (
              <p className={classes.errorText}>Must include a description</p>
            )}
          </div>
          <div className={dailyChallengeDescriptionClassses}>
            <label htmlFor="daily_challenge_description">
              Daily Challenge Description
            </label>
            <input
              type="text"
              id="daily_challenge_description"
              value={dailyChallengeDescriptionValue}
              onChange={dailyChallengeDescriptionChangeHandler}
              onBlur={dailyChallengeDescriptionBlurHandler}
            />
            {dailyChallengeDescriptionHasError && (
              <p className={classes.errorText}>Must include a description</p>
            )}
          </div>
          <div className={classes.formActions}>
            <Button color="blue" size="small" onClick={onClose}>
              Cancel
            </Button>
            <Button size="small" disabled={!formIsValid}>
              Add
            </Button>
          </div>
        </div>
      </form>
    </AdminFormCard>
  );
};

export default UpdateWorkoutForm;
