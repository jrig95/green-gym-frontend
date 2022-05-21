import { useUpdateLibraryItem } from "../AdminComponents/Library/Hooks/use-update-library-items";
import useInput from "./Hooks/use-input";
import Button from "../UI/Button";
import classes from "./Form.module.css";

const UpdateLibraryItemForm = ({ libraryItem, onClose }) => {
  const updateLibraryItem = useUpdateLibraryItem();
  const textNotEmpty = (value) => value !== "";

  const {
    value: titleValue,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHander,
    reset: resetTitle,
  } = useInput(textNotEmpty, libraryItem.title);

  const titleClasses = titleHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const addLibraryItemHandler = (event) => {
    event.preventDefault();

    const library_item = {
      id: libraryItem.id,
      title: titleValue,
    };

    updateLibraryItem(library_item);

    onClose();
  };

  return (
    <div>
      <h1 className={classes.title}>Update {libraryItem.title}</h1>
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
          <div className={classes.formActions}>
            <Button color="blue" size="small" onClick={onClose}>
              Cancel
            </Button>
            <Button size="small" type="submit">
              Update
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateLibraryItemForm;
