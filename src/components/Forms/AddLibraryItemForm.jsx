import { useCreateLibraryItem } from "../AdminComponents/Library/Hooks/use-create-library-item";
import useInput from "./Hooks/use-input";
import Button from "../UI/Button";
import classes from "./Form.module.css";
import { useState } from "react";
import { FileInput } from "@mantine/core";

const AddLibraryItemForm = ({ onClose }) => {
  const [fileInputValue, setFileInputValue] = useState(null);

  // React query custom hook
  const createLibraryItem = useCreateLibraryItem();
  const textNotEmpty = (value) => value !== "";

  const {
    value: titleValue,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHander,
  } = useInput(textNotEmpty);

  const [tagValue, setTagValue] = useState("");
  // const tags = tagValue.split(",");
  const handleTagChange = (event) => {
    setTagValue(event.target.value);
  };
  const titleClasses = titleHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const addLibraryItemHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("library_item[title]", titleValue);
    formData.append("library_item[video]", fileInputValue);
    formData.append("library_item[tag_list][]", tagValue);
    await createLibraryItem(formData);
    onClose();
  };

  const formIsValid = titleIsValid;

  return (
    <div>
      <h1 className={classes.title}>Add Library Item</h1>
      <form onSubmit={addLibraryItemHandler}>
        <div className={classes.controlGroup}>
          <div className={titleClasses}>
            <label htmlFor="exercise_title">Exercise Title</label>
            <input
              type="text"
              id="exercise_title"
              value={titleValue}
              onChange={titleChangeHandler}
              onBlur={titleBlurHander}
            />
            {titleHasError && (
              <p className={classes.errorText}>Must have a title</p>
            )}
          </div>
          <div className={titleClasses}>
            <label htmlFor="exercise_tags">Exercise Tags</label>
            <input
              type="text"
              id="exercise_tags"
              value={tagValue}
              onInput={handleTagChange}
              placeholder="e.g. outdoor, strength, cardio"
            />
          </div>
          <div className={classes.formControl}>
            <FileInput
              value={fileInputValue}
              label="Video upload"
              accept="video/*"
              onChange={setFileInputValue}
            />
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

export default AddLibraryItemForm;
