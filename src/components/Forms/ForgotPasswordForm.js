import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIsMutating } from "react-query";

import ResetPasswordMessage from "../User/ResetPasswordMessage";
import classes from "./ForgotPasswordForm.module.css";
import useInput from "./Hooks/use-input";
import Button from "../UI/Button";
import FormCard from "./FormCard";
import { useResetPasswordToken } from "../User/hooks/use-reset-password-token";
import LoadingSpinnerButton from '../UI/LoadingSpinnerButton';

const ForgotPasswordForm = () => {
  const isMutating = useIsMutating();
  const [checkEmailMessageIsShown, setCheckEmailMessageIsShown] =
    useState(false);
  const navigate = useNavigate();
  const { mutate: resetPasswordToken, isSuccess: resetPasswordTokenIsSuccess } =
    useResetPasswordToken();
  const textNotEmpty = (value) => value.trim() !== "";

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(textNotEmpty);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // TODO: Create user with email

    const user = {
      email: emailValue,
    };

    resetPasswordToken(user);
    // resetEmail();
  };

  useEffect(() => {
    if (resetPasswordTokenIsSuccess) {
      // This should redirect to a message telling the user to check their email.
      setCheckEmailMessageIsShown(true);
    }
  }, [resetPasswordTokenIsSuccess, navigate]);

  const emailClasses = emailHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const formIsValid = emailIsValid;

  const submitButtonText = isMutating ? <LoadingSpinnerButton /> : "Submit";

  return (
    <Fragment>
      {checkEmailMessageIsShown && <ResetPasswordMessage />}
      <FormCard
        title="Forgot Password?"
        body="Enter the email you used to sign up"
      >
        <form onSubmit={formSubmitHandler}>
          <div className={classes.controlGroup}>
            <div className={emailClasses}>
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                id="email"
                value={emailValue}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
              {emailHasError && (
                <p className={classes.errorText}>
                  please enter a valid e-mail address
                </p>
              )}
            </div>
            <div className={classes.formActions}>
              <Button color="blue" size="small">
                Cancel
              </Button>
              <Button size="small" type="submit" disabled={!formIsValid || isMutating}>
                {submitButtonText}
              </Button>
            </div>
          </div>
        </form>
      </FormCard>
    </Fragment>
  );
};

export default ForgotPasswordForm;
