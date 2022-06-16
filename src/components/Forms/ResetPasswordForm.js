import { useState, useEffect } from "react";

import classes from "./Form.module.css";
import useInput from "./Hooks/use-input";
import Button from "../UI/Button";
import FormCard from "./FormCard";

const ResetPasswordForm = () => {
  const [passwordsDoNotMatch, setPasswordsDoNotMatch] = useState(false);
  const textNotEmpty = (value) => value.trim() !== "";

  const {
    value: newPasswordValue,
    isValid: newPasswordIsValid,
    hasError: newPasswordHasError,
    valueChangeHandler: newPasswordChangeHandler,
    inputBlurHandler: newPasswordBlurHandler,
  } = useInput(textNotEmpty);

  const {
    value: confirmPasswordValue,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
  } = useInput(textNotEmpty);

  const {
    value: passwordTokenValue,
    isValid: passwordTokenIsValid,
    hasError: passwordTokenHasError,
    valueChangeHandler: passwordTokenHandler,
    inputBlurHandler: passwordTokenBlurHander,
  } = useInput(textNotEmpty);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // check to see if passwords match
    if (newPasswordValue === confirmPasswordValue) {
      const user = {
        password: newPasswordValue,
      };

      console.log(user);
    } else {
      setPasswordsDoNotMatch(true);
    }
    // TODO: Create a user with a password
    // This creates an emails. If a user
  };

  useEffect(() => {
    setPasswordsDoNotMatch(false);
  }, [newPasswordValue, confirmPasswordValue]);

  const newPasswordClasses = newPasswordHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const confirmPasswordClasses = confirmPasswordHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const passwordTokenClasses = passwordTokenHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const formIsValid =
    newPasswordIsValid && confirmPasswordIsValid && passwordTokenIsValid;

  return (
    <FormCard title="Reset Password">
      <form onSubmit={formSubmitHandler}>
        <div className={classes.controlGroup}>
          <div className={passwordTokenClasses}>
            <label htmlFor="password-token">Reset Password Token</label>
            <input
              type="text"
              id="password-token"
              value={passwordTokenValue}
              onChange={passwordTokenHandler}
              onBlur={passwordTokenBlurHander}
            />
            {passwordTokenHasError && (
              <p className={classes.errorText}>
                please provide 6 character token
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
          <div className={confirmPasswordClasses}>
            <label htmlFor="new-password">Confirm Password</label>
            <input
              type="password"
              id="new-password"
              value={confirmPasswordValue}
              onChange={confirmPasswordChangeHandler}
              onBlur={confirmPasswordBlurHandler}
            />
            {confirmPasswordHasError && (
              <p className={classes.errorText}>
                password must be longer than 8 characters
              </p>
            )}
          </div>
          {passwordsDoNotMatch && (
            <p className={classes.errorText}>
              Passwords do not match. Please try again.
            </p>
          )}
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
