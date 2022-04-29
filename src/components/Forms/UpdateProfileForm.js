import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

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
    passions: "" 
  },
};

const UpdateProfileForm = () => {
  // const [updatedFirstName, setUpdatedFirstName] = useState(
  //   DUMMY_DATA.user_one.first_name
  // );

  // const updatedFirstNameChangeHandler = (event) => {
  //   setUpdatedFirstName(event.target.value);
  // };

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
    setEnteredValue: setEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(textNotEmpty);

  // useEffect(() => {
  //   firstNameChangeHandler(DUMMY_DATA.user_one.first_name);
  // }, [])

  const formSubmitHandler = (event) => {
    event.preventDefault();

    resetFirstName();
    resetLastName();
    resetCompany();
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
              <p className={classes.errorText}>please enter your second name</p>
            )}
          </div>

          <div className={classes.formControl}>
            <label>Age</label>
            <input type="number" min={18} max={100} placeholder="18" />
          </div>
          <div className={`${classes.formControl} ${classes.customSelect}`}>
            <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className={companyClasses}>
            <label htmlFor="company">{t("company")}</label>
            <input
              type="text"
              id="company"
              value={DUMMY_DATA.user_one.company || companyValue}
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
            <select name="fitness_level" id="fitness_level">
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
