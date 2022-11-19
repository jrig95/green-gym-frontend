import { useIsMutating } from "react-query";
import { useState, useRef, useEffect } from "react";

import { usePrograms } from "../Program/hooks/use-programs";
import { useUpdateReward } from "../Reward/hooks/use-update-rewards";
import useInput from "./Hooks/use-input";
import Button from "../UI/Button";
import classes from "./Form.module.css";
import LoadingSpinnerLarge from "../UI/LoadingSpinnerLarge";
import LoadingSpinnerButton from '../UI/LoadingSpinnerButton';

const UpdateRewardForm = ({ onClose, reward }) => {
  const isMutating = useIsMutating();

  const { data: programsData, isLoading: programsAreLoading } = usePrograms();

  const { mutate:updateReward, isSuccess: updateRewardIsSuccess} = useUpdateReward();

  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const imageRef = useRef();

  // Get programs
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
  } = useInput(textNotEmpty, reward.reward_name);

  const {
    value: pointsValue,
    isValid: pointsIsValid,
    hasError: pointsHasError,
    valueChangeHandler: pointsChangeHandler,
    inputBlurHandler: pointsBlurHandler,
  } = useInput(isNumber, reward.reward_points);

  const { value: programValue, valueChangeHandler: programChangeHandler } =
    useInput(textNotEmpty);

  const updateRewardHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("reward[reward_name]", titleValue);
    formData.append("reward[reward_points]", pointsValue);

    if (programValue !== "") {
      formData.append("reward[program_id]", programValue);
    }

    if (selectedImageFile !== null) {
      formData.append("reward[photo]", selectedImageFile);
    }

    const updatedReward = {
      id: reward.id,
      rewardData: formData,
    };

    updateReward(updatedReward)
  };

  useEffect(() => {
    if (updateRewardIsSuccess) {
      onClose();
    }
  }, [updateRewardIsSuccess, onClose])

  const fileSelectHandler = (event) => {
    setSelectedImageFile(event.target.files[0]);
  };

  const formIsValid = titleIsValid && pointsIsValid;

  const titleClasses = titleHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const pointsClasses = pointsHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

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
            <Button size="small" type="submit" disabled={!formIsValid || isMutating}>
              {isMutating ? <LoadingSpinnerButton /> : "Update"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateRewardForm;
