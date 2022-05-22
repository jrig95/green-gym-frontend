import { useUpdateReward } from "../Reward/hooks/use-update-rewards";
import useInput from "./Hooks/use-input";
import Button from "../UI/Button";
import classes from "./Form.module.css";

const UpdateRewardForm = ({ onClose, reward }) => {
  const updateReward = useUpdateReward();

  // use state to managed edited values
  // how do I stop this from updating?
  console.log(reward, "UpdateRewardForm");

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
    reset: resetTitle,
  } = useInput(textNotEmpty, reward.reward_name);

  const {
    value: pointsValue,
    isValid: pointsIsValid,
    hasError: pointsHasError,
    valueChangeHandler: pointsChangeHandler,
    inputBlurHandler: pointsBlurHandler,
    reset: resetPoints,
  } = useInput(isNumber, reward.reward_points);

  const updateRewardHandler = (event) => {
    event.preventDefault();

    const updatedReward = {
      id: reward.id,
      reward_name: titleValue,
      reward_points: pointsValue
    }

    updateReward(updatedReward)

    onClose();
  };

  const formIsValid = titleIsValid && pointsIsValid;

  const titleClasses = titleHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const pointsClasses = pointsHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  return (
    <div>
      <h1 className={classes.title}>Update {reward.reward_name}</h1>
      <form onSubmit={updateRewardHandler}>
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
          {/* <div className={classes.formControl}>
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
          </div> */}
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
              Update
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateRewardForm;
