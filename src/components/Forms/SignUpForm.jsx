import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useUserSignup } from "../User/hooks/use-user-signup";
import classes from "./SignUpForm.module.css";
import SignUpFormCard from "./SignUpFormCard";
import Button from "../UI/Button";
import useInput from "./Hooks/use-input";
import { useEffect } from "react";
import { useSendOtpCode } from "../User/hooks/use-send-otp-code";
import { useVerifyOtpCode } from "../User/hooks/use-verify-otp-code";

const SignUpForm = () => {
  const [countdownIsActive, setCountdownIsActive] = useState(false);
  const [numberIsVerified, setNumberIsVerified] = useState(false);
  const [verifyCodeIsShown, setVerifyCodeIsShown] = useState(false);
  const [optErrorMessage, setOptErrorMessage] = useState({
    message: "",
    isShown: false,
  });
  const [otpCodeIsVerified, setOtpCodeIsVerified] = useState();
  const sendOtpCode = useSendOtpCode();
  const {
    mutate: verifyOtpCode,
    data: verifyOtpCodeData,
    isSuccess: verifyOtpCodeIsSuccess,
  } = useVerifyOtpCode();

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

  const {
    value: otpCodeValue,
    isValid: otpCodeIsValid,
    hasError: otpCodeHasError,
    valueChangeHandler: otpCodeChangeHandler,
    inputBlurHandler: otpCodeBlurHandler,
  } = useInput(textNotEmpty);

  const [remainingTime, setRemainingTime] = useState(60);

  useEffect(() => {
    if (countdownIsActive) {
      const intervalId = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
        if (remainingTime <= 0) {
          setRemainingTime(60);
          setCountdownIsActive(false);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [countdownIsActive, remainingTime]);

  const sendOtpCodeHandler = (event) => {
    event.preventDefault();
    sendOtpCode({ phone_number: phoneNumberValue });
    setVerifyCodeIsShown(true);
    setCountdownIsActive(true);
  };

  const varifyOtpHandler = (event) => {
    event.preventDefault();
    // create
    const code = {
      phone_number: phoneNumberValue,
      code: otpCodeValue,
    };

    verifyOtpCode(code);
  };

  useEffect(() => {
    if (verifyOtpCodeIsSuccess) {
      if (verifyOtpCodeData.msg === "Wrong OTP code") {
        // Display message to user telling them it is the Wrong OTP code
        setOptErrorMessage({ message: "Wrong OTP code", isShown: true });
      }

      if (verifyOtpCodeData.msg === "OTP expired") {
        // Display message to user telling them the OTP has expired
        setOptErrorMessage({ message: "OTP expired", isShown: true });
      }

      if (verifyOtpCodeData.msg === "OTP code matches. Success") {
        // Make it so form can be submitted
        setOptErrorMessage({ isShown: false });
        setOtpCodeIsVerified(true);
        setNumberIsVerified(true);
      }
    }
  }, [verifyOtpCodeIsSuccess, verifyOtpCodeData]);

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
    ? `${classes.formControl} ${classes.formButtonGroup} ${classes.invalid}`
    : `${classes.formControl} ${classes.formButtonGroup}`;

  const otpCodeClasses = otpCodeHasError
    ? `${classes.formControl} ${classes.formButtonGroup} ${classes.invalid}`
    : `${classes.formControl} ${classes.formButtonGroup}`;

  const formIsValid =
    firtNameIsValid &
    lastNameIsValid &
    companyIsValid &
    emailIsValid &
    passwordIsValid &
    phoneNumberIsValid &
    otpCodeIsVerified;

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
            {!countdownIsActive && <button className={classes.codeButton} onClick={sendOtpCodeHandler}>
              Get Code
            </button>}
            {countdownIsActive && <button disabled={true} className={classes.codeButton}>{remainingTime}</button>}
          </div>
          {phoneNumberHasError && !numberIsVerified && (
            <p className={classes.errorText}>
              {t("please_enter_a_valid_number")}
            </p>
          )}
          {verifyCodeIsShown && !numberIsVerified && (
            <div className={otpCodeClasses}>
              <label htmlFor="otp_code">Verification Code</label>
              <input
                type="text"
                id="otp_code"
                value={otpCodeValue}
                onChange={otpCodeChangeHandler}
                onBlur={otpCodeBlurHandler}
              />
              <button
                className={classes.codeButton}
                onClick={varifyOtpHandler}
                size="small"
              >
                Verify
              </button>
              {optErrorMessage.isShown && (
                <p className={classes.errorText}>{optErrorMessage.message}</p>
              )}
            </div>
          )}
          {numberIsVerified && (
            <div className={classes.numberVerified}>
              <h1>Number Verified</h1>
            </div>
          )}
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
