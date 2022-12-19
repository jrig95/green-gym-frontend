import { useCreateLibraryItem } from "../AdminComponents/Library/Hooks/use-create-library-item";
import useInput from "./Hooks/use-input";
import Button from "../UI/Button";
import classes from "./Form.module.css";
import { useRef, useState } from "react";

const AddLibraryItemForm = ({ onClose }) => {
  const [selectedVideoFile, setSelectedVideoFile] = useState();
  const videoRef = useRef();

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
  const handleTagChange = (event) => {
    setTagValue(event.target.value);
  }
  const titleClasses = titleHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const addLibraryItemHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();
    const tags = tagValue.split(",");
    formData.append("library_item[title]", titleValue);
    formData.append("library_item[video]", selectedVideoFile);
    formData.append("library_item[tag_list]", tags);

    // const library_item = {
    //   title: titleValue,
    // };

    createLibraryItem(formData);
    onClose();
  };

  const fileSelectHandler = (event) => {
    setSelectedVideoFile(event.target.files[0]);
  };

  const formIsValid = titleIsValid

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
            <label htmlFor="exercise_title">Exercise Tags</label>
            <input
              type="text"
              id="exercise_title"
              value={tagValue}
              onChange={handleTagChange}
            />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="video">Video</label>
            <input
              style={{display: 'none'}}
              type="file"
              id="video"
              accept="video/*"
              onChange={fileSelectHandler}
              ref={videoRef}
            />
            <Button size="small" onClick={() => videoRef.current.click()}>Add Video</Button>
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
