import { useReward } from "../Reward/hooks/use-reward";
import { useCreateReward } from "../Reward/hooks/use-create-reward";
import useInput from "./Hooks/use-input";
import Button from "../UI/Button";
import classes from "./Form.module.css";
import { useRef, useState } from "react";

const UpdateRewardForm = ({ onClose, rewardId }) => {
  const createReward = useCreateReward();
  const { data } = useReward(rewardId);
  
  // use state to managed edited values
  console.log(data, "why is it getting all rewards?");
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
    reset: restTitle,
  } = useInput(textNotEmpty);

  const {
    value: pointsValue,
    isValid: pointsIsValid,
    hasError: pointsHasError,
    valueChangeHandler: pointsChangeHandler,
    inputBlurHandler: pointsBlurHandler,
    reset: restPoints,
  } = useInput(isNumber);

  const addRewardHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('reward[reward_name]', titleValue);
    formData.append('reward[reward_points]', pointsValue);
    formData.append('reward[photo]', selectedImageFile);

    console.log(formData);

    createReward(formData);

    onClose();
  };

  const formIsValid = titleIsValid && pointsIsValid;

  const titleClasses = titleHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const pointsClasses = pointsHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const fileSelectHander = (event) => {
    setSelecetedImageFile(event.target.files[0]);
  };

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
              onChange={fileSelectHander}
              ref={imageRef}
            />
            <Button size="small" onClick={() => imageRef.current.click()}>
              Add Image
            </Button>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="points">Program (optional)</label>
            <select id="program">
              <option>none</option>
              <option>1</option>
            </select>
          </div>
          <div className={classes.formActions}>
            <Button color="blue" size="small" onClick={onClose}>
              Cancel
            </Button>
            <Button size="small" type="submit" disabled={!formIsValid}>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateRewardForm;
