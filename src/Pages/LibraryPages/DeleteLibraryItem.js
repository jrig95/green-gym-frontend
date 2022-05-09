import Button from "../../components/UI/Button";
import classes from "./DeleteLibraryItem.module.css";
import Modal from "../../components/UI/Modal";

const DeleteLibraryItem = ({onClose, onDelete, libraryItem}) => {
  return <Modal>
    <div className={classes.textContainer}>
      <h2>Are you sure you wish to delete this Library Item?</h2>
    </div>
    <div className={classes.buttonContainer}>
      <Button size="small" color="blue">
        Cancel
      </Button>
      <Button size="small">
        Delete
      </Button>
    </div>
  </Modal>
};

export default DeleteLibraryItem;