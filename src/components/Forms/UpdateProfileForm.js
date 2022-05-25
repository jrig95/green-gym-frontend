import { useTranslation } from "react-i18next";

import {
  textNotEmpty,
  selectIsValid,
} from "../../utils/input-from-validations";
import Button from "../UI/Button";
import useInput from "./Hooks/use-input";
import FormCard from "./FormCard";
import classes from "./Form.module.css";

const DUMMY_DATA = {
  user_one: {
    first_name: "Darren",
    last_name: "Lewis",
    age: "",
    gender: "",
    company: "Green Gym",
    phone_number: "",
    email: "darren@lewis.com",
    fitness_level: "",
    passions: "",
  },
};

const UpdateProfileForm = ({ user: userData }) => {
  // Get Translation hook
  const { t } = useTranslation();

  const {
    value: firstNameValue,
    isValid: firtNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(textNotEmpty, userData.first_name);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(textNotEmpty, userData.last_name);

  const {
    value: companyValue,
    isValid: companyIsValid,
    hasError: companyHasError,
    valueChangeHandler: companyChangeHandler,
    inputBlurHandler: companyBlurHandler,
    reset: resetCompany,
  } = useInput(textNotEmpty, userData.user_company);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(textNotEmpty, userData.email);

  const { value: genderValue, valueChangeHandler: genderChangeHandler } =
    useInput(selectIsValid);

  const {
    value: fitnessLevelValue,
    valueChangeHandler: fitnessLevelChangeHandler,
  } = useInput(selectIsValid, userData.user_fitness_level);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const user = {
      id: userData.id,
      email: emailValue,
      first_name: firstNameValue,
      last_name: lastNameValue,
      user_company: companyValue,
      user_fitness_level: fitnessLevelValue,
      user_gender: genderValue
    }

    // Write hook to create user update

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

  const formIsValid = true;

  return (
    <FormCard title={"Update Profile"}>
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
              <p className={classes.errorText}>please enter your first name</p>
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
              <p className={classes.errorText}>please enter your last name</p>
            )}
          </div>

          <div className={classes.formControl}>
            <label>Age</label>
            <input type="number" min={18} max={100} />
          </div>
          <div className={`${classes.formControl} ${classes.customSelect}`}>
            <label
              value={genderValue}
              onChange={genderChangeHandler}
              htmlFor="gender"
            >
              Gender
            </label>
            <select name="gender" id="gender">
              <option>Selecet...</option>
              <option>Male</option>
              <option>Female</option>
            </select>
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
                please enter your company name
              </p>
            )}
          </div>
          <div className={classes.formControl}>
            <label htmlFor="phone_number">Phone Number</label>
            <input type="text" id="phone_number" />
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
                please enter a valid e-mail address
              </p>
            )}
          </div>
          <div className={classes.formControl}>
            <label htmlFor="fitness_level">Fitness Level</label>
            <select
              value={fitnessLevelValue}
              onChange={fitnessLevelChangeHandler}
              name="fitness_level"
              id="fitness_level"
            >
              <option>Select...</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="passions">Tell us about your passions</label>
            <textarea />
          </div>
          <div className={classes.formActions}>
            <Button color="blue" size="small">
              {t("cancel")}
            </Button>
            <Button size="small" type="submit" disabled={!formIsValid}>
              {t("submit")}
            </Button>
          </div>
        </div>
      </form>
    </FormCard>
  );
};

export default UpdateProfileForm;
