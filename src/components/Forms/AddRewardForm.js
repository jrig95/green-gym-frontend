import { useIsMutating } from "react-query";
import { useRef, useState, useEffect } from "react";

import { usePrograms } from "../Program/hooks/use-programs";
import { useCreateReward } from "../Reward/hooks/use-create-reward";
import useInput from "./Hooks/use-input";
import Button from "../UI/Button";
import classes from "./Form.module.css";
import LoadingSpinnerLarge from "../UI/LoadingSpinnerLarge";
import LoadingSpinnerButton from "../UI/LoadingSpinnerButton";

const AddRewardForm = ({ onClose }) => {
  const isMutating = useIsMutating();
  const { mutate: createReward, isSuccess: createRewardIsSuccess } =
    useCreateReward();

  // TODO: get all programs
  const { data: programsData, isLoading: programsAreLoading } = usePrograms();

  // use state to managed edited value

  // Image ref for the add image button - use state for image
  const imageRef = useRef();
  const [selectedImageFile, setSelecetedImageFile] = useState(null);

  const textNotEmpty = (value) => value !== "";
  const isNumber = (value) => {
    const number = parseInt(value);
    return !isNaN(number);
  };

  const {
    value: titleValue,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
  } = useInput(textNotEmpty);

  const {
    value: pointsValue,
    isValid: pointsIsValid,
    hasError: pointsHasError,
    valueChangeHandler: pointsChangeHandler,
    inputBlurHandler: pointsBlurHandler,
  } = useInput(isNumber);

  const { value: programValue, valueChangeHandler: programChangeHandler } =
    useInput(textNotEmpty);

  const addRewardHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("reward[reward_name]", titleValue);
    formData.append("reward[reward_points]", pointsValue);
    formData.append("reward[photo]", selectedImageFile);

    if (programValue !== "") {
      formData.append("reward[program_id]", programValue);
    }

    createReward(formData);
  };

  useEffect(() => {
    if (createRewardIsSuccess) {
      onClose();
    }
  }, [createRewardIsSuccess, onClose]);

  const formIsValid = titleIsValid && pointsIsValid;

  const titleClasses = titleHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const pointsClasses = pointsHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const fileSelectHandler = (event) => {
    setSelecetedImageFile(event.target.files[0]);
  };

  if (programsAreLoading) return <LoadingSpinnerLarge />;

  const programOptions = programsData.map((program) => {
    return (
      <option key={program.id} value={program.id}>
        {program.program_title}
      </option>
    );
  });

  return (
    <div>
      <h1 className={classes.title}>Add Reward</h1>
      <form onSubmit={addRewardHandler}>
        <div className={classes.controlGroup}>
          <div className={titleClasses}>
            <label htmlFor="title">Reward Name</label>
            <input
              type="text"
              id="title"
              value={titleValue}
              onChange={titleChangeHandler}
              onBlur={titleBlurHandler}
            />
            {titleHasError && (
              <p className={classes.errorText}>Must include a name</p>
            )}
          </div>
          <div className={pointsClasses}>
            <label htmlFor="points">Points</label>
            <input
              type="number"
              id="points"
              min={0}
              value={pointsValue}
              onChange={pointsChangeHandler}
              onBlur={pointsBlurHandler}
            />
            {pointsHasError && (
              <p className={classes.errorText}>Must include points</p>
            )}
          </div>
          <div className={classes.formControl}>
            <label htmlFor="image">Cover Image</label>
            <input
              style={{ display: "none" }}
              type="file"
              id="image"
              accept="image/jpeg image/png"
              onChange={fileSelectHandler}
              ref={imageRef}
            />
            <Button size="small" onClick={() => imageRef.current.click()}>
              Add Image
            </Button>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="points">Program (optional)</label>
            <select
              id="program"
              value={programValue}
              onChange={programChangeHandler}
            >
              <option value="default">none</option>
              {programOptions}
            </select>
          </div>
          <div className={classes.formActions}>
            <Button color="blue" size="small" onClick={onClose}>
              Cancel
            </Button>
            <Button
              size="small"
              type="submit"
              disabled={!formIsValid || isMutating}
            >
              {isMutating ? <LoadingSpinnerButton /> : "Submit"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRewardForm;
