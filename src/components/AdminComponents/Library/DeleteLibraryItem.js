import Button from "../../UI/Button";
import classes from "./DeleteLibraryItem.module.css";
import Modal from "../../UI/Modal";

const DeleteLibraryItem = ({ onClose, onDelete, libraryItem }) => {
  return (
    <Modal>
      <div className={classes.textContainer}>
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
