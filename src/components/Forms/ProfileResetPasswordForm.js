import classes from "./Form.module.css";
import useInput from "./Hooks/use-input";
import Button from '../UI/Button';
import FormCard from "./FormCard";

const ProfileResetPasswordForm = () => {
  const textNotEmpty = (value) => value.trim() !== "";

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(textNotEmpty);

  const {
    value: newPasswordValue,
    isValid: newPasswordIsValid,
    hasError: newPasswordHasError,
    valueChangeHandler: newPasswordChangeHandler,
    inputBlurHandler: newPasswordBlurHandler,
    reset: resetNewPassword,
  } = useInput(textNotEmpty);

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  const passwordClasses = passwordHasError
  ? `${classes.formControl} ${classes.invalid}`
  : classes.formControl;

  const newPasswordClasses = newPasswordHasError
  ? `${classes.formControl} ${classes.invalid}`
  : classes.formControl;


  const formIsValid = passwordIsValid

  return (
    <FormCard title="Reset Password">
      <form onSubmit={formSubmitHandler}>
        <div className={classes.controlGroup}>
          <div className={passwordClasses}>
            <label htmlFor="password">Current Password</label>
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
          <div className={newPasswordClasses}>
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              id="password"
              value={newPasswordValue}
              onChange={newPasswordChangeHandler}
              onBlur={newPasswordBlurHandler}
            />
            {newPasswordHasError && (
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

export default ProfileResetPasswordForm;