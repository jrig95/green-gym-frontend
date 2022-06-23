import classes from "./ForgotPasswordForm.module.css";
import useInput from "./Hooks/use-input";
import Button from '../UI/Button';
import FormCard from "./FormCard";
import { useTranslation } from "react-i18next";


const ForgotPasswordForm = () => {
  const { t } = useTranslation();
  const textNotEmpty = (value) => value.trim() !== "";

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(textNotEmpty);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    resetEmail();
  };

  const emailClasses = emailHasError
  ? `${classes.formControl} ${classes.invalid}`
  : classes.formControl;

  const formIsValid = emailIsValid;

  return (
    <FormCard title={t("forgot_password_form_forgot_password")} body={t("forgot_password_form_enter_email")}>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.controlGroup}>
          <div className={emailClasses}>
            <label htmlFor="email">{t("forgot_password_form_email")}</label>
            <input
              type="email"
              id="email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className={classes.errorText}>
                {t("forgot_password_form_valid_email")}
              </p>
            )}
          </div>
          <div className={classes.formActions}>
            <Button color="blue" size="small">
              {t("forgot_password_form_valid_cancel")}
            </Button>
            <Button size="small" type="submit" disabled={!formIsValid}>
              {t("forgot_password_form_valid_submit")}
            </Button>
          </div>
        </div>
      </form>
    </FormCard>
  );

};

export default ForgotPasswordForm;
