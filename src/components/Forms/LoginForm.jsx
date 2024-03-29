import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useUserLogin } from "../User/hooks/use-user-login";
import { Link } from "react-router-dom";
import classes from "./LoginForm.module.css";
import useInput from "./Hooks/use-input";
import Button from "../UI/Button";
import { useEffect } from "react";
import LoginFormCard from "./LoginFormCard";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const { mutate: userLogin, isSuccess: loginIsSuccess } = useUserLogin();

  const textNotEmpty = (value) => value.trim() !== "";

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(textNotEmpty);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(textNotEmpty);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const user = {
      email: emailValue,
      password: passwordValue,
    };

    userLogin(user);
  };

  useEffect(() => {
    if (loginIsSuccess) {
      if (authCtx.isAdmin) {
        navigate("/members");
      }

      if (!authCtx.isAdmin) {
        navigate("/programs");
      }
    }
  }, [loginIsSuccess, authCtx.isAdmin]);

  const emailClasses = emailHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const passwordClasses = passwordHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const formIsValid = emailIsValid & passwordIsValid;

  return (
    <LoginFormCard title={t("log_in_login")}>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.controlGroup}>
          <div className={emailClasses}>
            <label htmlFor="email">{t("log_in_form_email")}</label>

            <input
              type="email"
              id="email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className={classes.errorText}>
                {t("log_in_please_enter_a_valid_email")}
              </p>
            )}
          </div>
          <div className={passwordClasses}>
            <label htmlFor="password">{t("log_in_form_password")}</label>
            <input
              type="password"
              id="password"
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordHasError && (
              <p className={classes.errorText}>
                {t("log_in_password_must_be_longer_than_8")}
              </p>
            )}
          </div>
          <div className={classes.formActions}>
            <Link to="/">
              <Button color="blue" size="small">
                {t("log_in_cancel")}
              </Button>
            </Link>
            <Button size="small" type="submit" disabled={!formIsValid}>
              {t("log_in_submit")}
            </Button>
          </div>
        </div>
      </form>
    </LoginFormCard>
  );
};

export default LoginForm;
