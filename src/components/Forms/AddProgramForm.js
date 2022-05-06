import FormCard from "./FormCard";
import classes from "./Form.module.css";
import Button from "../UI/Button";
import useInput from "./Hooks/use-input";

const AddProgramForm = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();


    const newProgram = {
      program_name: programNameValue,
      number_of_days: numberOfDaysValue,
      descriptiom: descriptionValue,
      cover_image: coverImageValue
    }

    console.log(newProgram);

    resetprogramName();
    resetNumberOfDays();
    resetDescription();
    resetCoverImage();
  };

  const textNotEmpty = (value) => value !== "";

  const isNotANumber = (value) => {
    const number = parseInt(value);
    return !isNaN(number);
  };

  const {
    value: programNameValue,
    isValid: programNameIsValid,
    hasError: programNameHasError,
    valueChangeHandler: programNameChangeHandler,
    inputBlurHandler: programNameBlurHandler,
    reset: resetprogramName,
  } = useInput(textNotEmpty);

  const {
    value: numberOfDaysValue,
    isValid: numberOfDaysIsValid,
    hasError: numberOfDaysHasError,
    valueChangeHandler: numberOfDaysChangeHandler,
    inputBlurHandler: numberOfDaysBlurHandler,
    reset: resetNumberOfDays,
  } = useInput(isNotANumber);

  const {
    value: descriptionValue,
    isValid: descriptionIsValid,
    hasError: descriptionHasError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    reset: resetDescription,
  } = useInput(textNotEmpty);

  const {
    value: coverImageValue,
    isValid: coverImageIsValid,
    hasError: coverImageHasError,
    valueChangeHandler: coverImageChangeHandler,
    inputBlurHandler: coverImageBlurHandler,
    reset: resetCoverImage,
  } = useInput(textNotEmpty);



  const programNameClasses = programNameHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const numberOfDaysClasses = numberOfDaysHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const descriptionClasses = descriptionHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const coverImageClasses = coverImageHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const formIsValid =
    programNameIsValid &&
    numberOfDaysIsValid &&
    descriptionIsValid &&
    coverImageIsValid;

  return (
    <FormCard title="Add Program">
      <form onSubmit={formSubmitHandler}>
        <div className={classes.controlGroup}>
          <div className={programNameClasses}>
            <label htmlFor="program_name">Program Name</label>
            <input
              type="text"
              id="program_name"
              value={programNameValue}
              onChange={programNameChangeHandler}
              onBlur={programNameBlurHandler}
            />
            {programNameHasError && (
              <p className={classes.errorText}>
                program name must be longer than 0 characters
              </p>
            )}
          </div>
          <div className={numberOfDaysClasses}>
            <label htmlFor="number_of_days">Number Of Days</label>
            <input
              type="number"
              id="number_of_days"
              min={0}
              value={numberOfDaysValue}
              onChange={numberOfDaysChangeHandler}
              onBlur={numberOfDaysBlurHandler}
            />
            {numberOfDaysHasError && (
              <p className={classes.errorText}>
                must be a valid number
              </p>
            )}
          </div>
          <div className={descriptionClasses}>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              value={descriptionValue}
              onChange={descriptionChangeHandler}
              onBlur={descriptionBlurHandler}
            />
            {descriptionHasError && (
              <p className={classes.errorText}>description cannot be blank</p>
            )}
          </div>
          <div className={coverImageClasses}>
            <label htmlFor="cover_image">Cover Image</label>
            <input
              type="text"
              id="cover_image"
              value={coverImageValue}
              onChange={coverImageChangeHandler}
              onBlur={coverImageBlurHandler}
            />
            {coverImageHasError && (
              <p className={classes.errorText}>cover image cannot be blank</p>
            )}
          </div>
          <div className={classes.formActions}>
            <Button color="blue" size="small">
              Cancel
            </Button>
            <Button size="small" type="submit" disabled={!formIsValid}>
              Add
            </Button>
          </div>
        </div>
      </form>
    </FormCard>
  );
};

export default AddProgramForm;
