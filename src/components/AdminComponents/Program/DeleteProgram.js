import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import classes from "./DeleteProgram.module.css";

const DeleteProgram = ({onClose, onDelete, program}) => {
  return (
    <Modal onClose={onClose}>
      <div className={classes.textContainer}>
        <h2>Are you sure you wish to delete the program "{program.title}"?</h2>
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

export default DeleteProgram;
