import { useTranslation } from "react-i18next";

import classes from "./Form.module.css";
import FormCard from "./FormCard";
import Button from "../UI/Button";
import useInput from "./Hooks/use-input";

const SignUpForm = () => {
  const { t } = useTranslation();

  const textNotEmpty = (value) => value.trim() !== "";

  const {
    value: firstNameValue,
    isValid: firtNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(textNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(textNotEmpty);

  const {
    value: companyValue,
    isValid: companyIsValid,
    hasError: companyHasError,
    valueChangeHandler: companyChangeHandler,
    inputBlurHandler: companyBlurHandler,
    reset: resetCompany,
  } = useInput(textNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(textNotEmpty);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(textNotEmpty);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const userData = {
      firstName: firstNameValue,
      secondName: lastNameValue,
      company: companyValue,
      email: emailValue,
      password: passwordValue,
    };

    console.log(userData);

    resetFirstName();
    resetLastName();
    resetCompany();
    resetEmail();
    resetPassword();
  };

  const firstNameClasses = firstNameHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const secondNameClasses = lastNameHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const companyClasses = companyHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const emailClasses = emailHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const passwordClasses = passwordHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const formIsValid =
    firtNameIsValid &
    lastNameIsValid &
    companyIsValid &
    emailIsValid &
    passwordIsValid;

  return (
    <FormCard title={t("sign_up")}>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.controlGroup}>
          <div className={firstNameClasses}>
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              value={firstNameValue}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
            />
            {firstNameHasError && (
              <p className={classes.errorText}>please enter your first name</p>
            )}
          </div>
          <div className={secondNameClasses}>
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              value={lastNameValue}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
            />
            {lastNameHasError && (
              <p className={classes.errorText}>please enter your second name</p>
            )}
          </div>
          <div className={companyClasses}>
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              value={companyValue}
              onChange={companyChangeHandler}
              onBlur={companyBlurHandler}
            />
            {companyHasError && (
              <p className={classes.errorText}>
                please enter your company name
              </p>
            )}
          </div>
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

export default SignUpForm;
