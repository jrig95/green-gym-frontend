import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useUserSignup } from "../User/hooks/use-user-signup";
import classes from "./SignUpForm.module.css";
import SignUpFormCard from "./SignUpFormCard";
import Button from "../UI/Button";
import useInput from "./Hooks/use-input";
import { useEffect } from "react";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const textNotEmpty = (value) => value.trim() !== "";
  const { mutate: userSignup, isSuccess: signUpIsSuccess } = useUserSignup();

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

  const {
    value: phoneNumberValue,
    isValid: phoneNumberIsValid,
    hasError: phoneNumberHasError,
    valueChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetPhoneNumber,
  } = useInput(textNotEmpty);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const user = {
      first_name: firstNameValue,
      last_name: lastNameValue,
      user_company: companyValue,
      email: emailValue,
      password: passwordValue,
      phone_number: phoneNumberValue,
    };

    userSignup(user);

    // console.log(userData);

    resetFirstName();
    resetLastName();
    resetCompany();
    resetEmail();
    resetPassword();
    resetPhoneNumber();
  };

  useEffect(() => {
    if (signUpIsSuccess) {
      navigate("/activities");
    }
  }, [signUpIsSuccess, navigate]);

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

  const phoneNumberClasses = phoneNumberHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const formIsValid =
    firtNameIsValid &
    lastNameIsValid &
    companyIsValid &
    emailIsValid &
    passwordIsValid &
    phoneNumberIsValid;

  return (
    <SignUpFormCard title={t("sign_up")}>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.controlGroup}>
          <div className={firstNameClasses}>
            <label htmlFor="first-name">{t("first_name")}</label>
            <input
              type="text"
              id="first-name"
              value={firstNameValue}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
            />
            {firstNameHasError && (
              <p className={classes.errorText}>
                {" "}
                {t("sign_up_form_please_enter_your_first_name")}
              </p>
            )}
          </div>
          <div className={secondNameClasses}>
            <label htmlFor="last-name">{t("last_name")}</label>
            <input
              type="text"
              id="last-name"
              value={lastNameValue}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
            />
            {lastNameHasError && (
              <p className={classes.errorText}>
                {t("sign_up_form_please_enter_your_second_name")}
              </p>
            )}
          </div>
          <div className={companyClasses}>
            <label htmlFor="company">{t("company")}</label>
            <input
              type="text"
              id="company"
              value={companyValue}
              onChange={companyChangeHandler}
              onBlur={companyBlurHandler}
            />
            {companyHasError && (
              <p className={classes.errorText}>
                {t("sign_up_form_please_enter_your_company_name")}
              </p>
            )}
          </div>
          <div className={emailClasses}>
            <label htmlFor="email">{t("e_mail")}</label>
            <input
              type="email"
              id="email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className={classes.errorText}>
                {t("sign_up_form_please_enter_a_valid_email")}
              </p>
            )}
          </div>
          <div className={passwordClasses}>
            <label htmlFor="password">{t("password")}</label>
            <input
              type="password"
              id="password"
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordHasError && (
              <p className={classes.errorText}>
                {t("sign_up_form_longer_than_8")}
              </p>
            )}
          </div>
          <div className={phoneNumberClasses}>
            <label htmlFor="phone_number">{t("phone_number")}</label>
            <input
              type="tel"
              id="phone_number"
              value={phoneNumberValue}
              onChange={phoneNumberChangeHandler}
              onBlur={phoneNumberBlurHandler}
            />
            <Button size="small">Get OTP</Button>
            {phoneNumberHasError && (
              <p className={classes.errorText}>
                {t("please_enter_a_valid_number")}
              </p>
            )}
          </div>
          <div className={classes.formControl}>
            <label htmlFor="otp_code">Code</label>
            <input type="number" id="otp_code" />
            <Button size="small">Verify</Button>
          </div>
          <div className={classes.formActions}>
            <Link to="/">
              <Button color="blue" size="small">
                {t("cancel")}
              </Button>
            </Link>
            <Button size="small" type="submit" disabled={!formIsValid}>
              {t("submit")}
            </Button>
          </div>
        </div>
      </form>
    </SignUpFormCard>
  );
};

export default SignUpForm;
