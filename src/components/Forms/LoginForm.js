import { useUser } from "../User/hooks/use-user";
import { useUserLogin } from "../User/hooks/use-user-login";
import { Link } from "react-router-dom";
import classes from "./Form.module.css";
import useInput from "./Hooks/use-input";
import Button from "../UI/Button";
import FormCard from "./FormCard";

const LoginForm = () => {
  const userLogin = useUserLogin();
  const { data } = useUser();

  console.log(data);
  const textNotEmpty = (value) => value.trim() !== "";

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

    const user = {
      email: emailValue,
      password: passwordValue
    }

    userLogin(user);
  };

  const emailClasses = emailHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const passwordClasses = passwordHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const formIsValid = emailIsValid & passwordIsValid;

  return (
    <FormCard title="Login">
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
            <Link to="/">
              <Button color="blue" size="small">
                Cancel
              </Button>
            </Link>
            <Button size="small" type="submit" disabled={!formIsValid}>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </FormCard>
  );
};

export default LoginForm;
