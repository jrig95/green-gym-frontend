import { useState, useEffect, Fragment } from "react";

import classes from "./Form.module.css";
import useInput from "./Hooks/use-input";
import Button from "../UI/Button";
import FormCard from "./FormCard";
import { useResetPassword } from "../User/hooks/use-reset-password";
import SuccessfullyResetPasswordMessage from "../User/SuccessfullyResetPasswordMessage";
import { useIsMutating } from 'react-query';
import LoadingSpinnerButton from '../UI/LoadingSpinnerButton';
import { useTranslation } from "react-i18next";


const ResetPasswordForm = () => {
  const { t } = useTranslation();
  const isMutating = useIsMutating();
  const { mutate: resetPassword, isSuccess: resetPasswordIsSuccess } =
    useResetPassword();

  const [
    successfullyResetPasswordMessageIsShown,
    setSuccessfullyResetPasswordMessageIsShown,
  ] = useState(false);
  const [passwordsDoNotMatch, setPasswordsDoNotMatch] = useState(false);
  const textNotEmpty = (value) => value.trim() !== "";
  const tokenIsSixCharacter = (value) => {
    return value.trim().length === 6;
  };

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
  } = useInput(tokenIsSixCharacter);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // check to see if passwords match
    if (newPasswordValue === confirmPasswordValue) {
      const user = {
        reset_password_token: passwordTokenValue,
        new_password: newPasswordValue,
        new_password_confirmation: confirmPasswordValue,
      };

      resetPassword(user);
    } else {
      setPasswordsDoNotMatch(true);
    }
    // TODO: Create a user with a password
    // This creates an emails. If a user
  };

  useEffect(() => {
    setPasswordsDoNotMatch(false);

    if (resetPasswordIsSuccess && !isMutating) {
      setSuccessfullyResetPasswordMessageIsShown(true);
    }
  }, [newPasswordValue, confirmPasswordValue, resetPasswordIsSuccess, isMutating]);

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

  const submitButtonTest = isMutating ? <LoadingSpinnerButton /> : "Submit"

  return (
    <Fragment>
      {successfullyResetPasswordMessageIsShown && (
        <SuccessfullyResetPasswordMessage />
      )}
      <FormCard title= {t("reset_password_form_title")}>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.controlGroup}>
            <div className={passwordTokenClasses}>
              <label htmlFor="password-token">{t("reset_password_form_reset_password_token")}</label>
              <input
                type="text"
                id="password-token"
                value={passwordTokenValue}
                onChange={passwordTokenHandler}
                onBlur={passwordTokenBlurHander}
              />
              {passwordTokenHasError && (
                <p className={classes.errorText}>
                  {t("reset_password_form_provide_6_character_token")}
                </p>
              )}
            </div>
            <div className={newPasswordClasses}>
              <label htmlFor="password">{t("reset_password_form_new_password")}</label>
              <input
                type="password"
                id="password"
                value={newPasswordValue}
                onChange={newPasswordChangeHandler}
                onBlur={newPasswordBlurHandler}
              />
              {newPasswordHasError && (
                <p className={classes.errorText}>
                  {t("reset_password_form_must_be_longer_than")}
                </p>
              )}
            </div>
            <div className={confirmPasswordClasses}>
              <label htmlFor="new-password">{t("reset_password_form_confirm_password")}</label>
              <input
                type="password"
                id="new-password"
                value={confirmPasswordValue}
                onChange={confirmPasswordChangeHandler}
                onBlur={confirmPasswordBlurHandler}
              />
              {confirmPasswordHasError && (
                <p className={classes.errorText}>
                  {t("reset_password_form_pw_longer_than_8")}
                </p>
              )}
            </div>
            {passwordsDoNotMatch && (
              <p className={classes.errorText}>
                {t("reset_password_form_pw_no_match")}
              </p>
            )}
            <div className={classes.formActions}>
              <Button color="blue" size="small">
                {t("reset_password_form_cancel")}
              </Button>
              <Button size="small" type="submit" disabled={!formIsValid || isMutating}>
                {t("reset_password_form_submit")}
              </Button>
            </div>
          </div>
        </form>
      </FormCard>
    </Fragment>
  );
};

export default ResetPasswordForm;
