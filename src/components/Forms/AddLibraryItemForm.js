import { useCreateLibraryItem } from "../AdminComponents/Library/Hooks/use-create-library-item";
import useInput from "./Hooks/use-input";
import Button from "../UI/Button";
import FormCard from "./AdminFormCard";
import classes from "./Form.module.css";

const AddLibraryItemForm = ({ onClose }) => {
  const createLibraryItem = useCreateLibraryItem();
  const textNotEmpty = (value) => value !== "";

  const {
    value: titleValue,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHander,
    reset: resetTitle,
  } = useInput(textNotEmpty);

  const titleClasses = titleHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const addLibraryItemHandler = (event) => {
    event.preventDefault();

    const library_item = {
      title: titleValue,
    };

    createLibraryItem(library_item);
    onClose();
  };

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
          <div className={classes.formControl}>
            <label>Video</label>
            <input />
          </div>
          <div className={classes.formActions}>
            <Button color="blue" size="small" onClick={onClose}>
              Cancel
            </Button>
            <Button size="small" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddLibraryItemForm;
