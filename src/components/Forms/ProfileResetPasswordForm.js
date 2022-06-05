import { useEffect, useState, useContext } from "react";
import { useIsFetching, useIsMutating } from "react-query";

import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useUpdateProfile } from "../User/hooks/use-update-profile";
import classes from "./Form.module.css";
import useInput from "./Hooks/use-input";
import Button from "../UI/Button";
import FormCard from "./FormCard";
import LoadingSpinnerButton from '../UI/LoadingSpinnerButton';

const ProfileResetPasswordForm = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const navigate = useNavigate();

  const textNotEmpty = (value) => value.trim() !== "";
  const authCtx = useContext(AuthContext);
  const userId = authCtx.userId;

  const fetchingOrMutating = isFetching || isMutating;

  const [passwordsDoNotMatch, setPasswordsDoNotMatch] = useState(false);

  const { mutate: updatePassword, isSuccess: updateProfileIsSuccess } =
    useUpdateProfile();

  const {
    value: newPasswordValue,
    isValid: newPasswordIsValid,
    hasError: newPasswordHasError,
    valueChangeHandler: newPasswordChangeHandler,
    inputBlurHandler: newPasswordBlurHandler,
    reset: resetNewPassword,
  } = useInput(textNotEmpty);

  const {
    value: confirmPasswordValue,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: confirmResetPassword,
  } = useInput(textNotEmpty);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (newPasswordValue === confirmPasswordValue) {
      console.log("submit");
      const user = {
        id: userId,
        password: newPasswordValue,
      };

      updatePassword(user);
    } else {
      console.log("Can't submit - display error");
      setPasswordsDoNotMatch(true);
    }
  };

  const navigateToProfileHandler = () => {
    navigate("/profile");
  }

  useEffect(() => {
    setPasswordsDoNotMatch(false);
  }, [newPasswordValue, confirmPasswordValue]);

  useEffect(() => {
    if (updateProfileIsSuccess) {
      navigateToProfileHandler();
    }
  }, [updateProfileIsSuccess]);

  const newPasswordClasses = newPasswordHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const retpyedPasswordClasses = confirmPasswordHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const formIsValid = newPasswordIsValid && confirmPasswordIsValid && !fetchingOrMutating;

  const buttonText = fetchingOrMutating ? <LoadingSpinnerButton /> : "Submit";

  return (
    <FormCard title="Reset Password">
      <form onSubmit={formSubmitHandler}>
        <div className={classes.controlGroup}>
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
          <div className={retpyedPasswordClasses}>
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="password"
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
            <p className={classes.errorText}>passwords do not match</p>
          )}
          <div className={classes.formActions}>
            <Button color="blue" size="small" onClick={navigateToProfileHandler}>
              Cancel
            </Button>
            <Button size="small" type="submit" disabled={!formIsValid}>
              {buttonText}
            </Button>
          </div>
        </div>
      </form>
    </FormCard>
  );
};

export default ProfileResetPasswordForm;
