import Button from "../../UI/Button";
import classes from "./DeleteLibraryItem.module.css";
import Modal from "../../UI/Modal";

const DeleteLibraryItem = ({ onClose, onDelete, libraryItem }) => {
  return (
    <Modal onClose={onClose}>
      <div className={classes.textContainer}>
        <h2 className={classes.warning}>
          Warning: deleting a library item may mean a program will not function
          correctly. Make sure this item isn't being used in any programs
        </h2>
        <h2>Are you sure you wish to delete {libraryItem.title}?</h2>
      </div>
      <div className={classes.buttonContainer}>
        <Button size="small" color="blue" onClick={onClose}>
          Cancel
        </Button>
        <Button size="small" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteLibraryItem;
