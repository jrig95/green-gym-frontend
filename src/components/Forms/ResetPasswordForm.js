import classes from "./Form.module.css";
import useInput from "./Hooks/use-input";
import Button from '../UI/Button';
import FormCard from "./FormCard";

const ResetPasswordForm = () => {
  const textNotEmpty = (value) => value.trim() !== "";

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(textNotEmpty);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // TODO: Create a user with a password
    // This creates an emails. If a user
  };

  const passwordClasses = passwordHasError
  ? `${classes.formControl} ${classes.invalid}`
  : classes.formControl;


  const formIsValid = passwordIsValid

  return (
    <FormCard title="Reset Password" body="Enter a new password">
      <form onSubmit={formSubmitHandler}>
        <div className={classes.controlGroup}>
          <div className={passwordClasses}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordHasError && (
              <p className={classes.errorText}>
                password must be longer than 8 characters
              </p>
            )}
          </div>
          <div className={classes.formActions}>
            <Button color="blue" size="small">
              Cancel
            </Button>
            <Button size="small" type="submit" disabled={!formIsValid}>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </FormCard>
  );
};

export default ResetPasswordForm;