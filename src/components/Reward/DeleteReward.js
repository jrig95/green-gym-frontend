import Button from "../UI/Button";
import classes from "./DeleteReward.module.css";
import Modal from "../UI/Modal";

const DeleteReward = ({ onDelete, onClose, reward}) => {
  return (
    <Modal onClose={onClose}>
      <div className={classes.textContainer}>
        <h2>Are you sure you wish to delete the program "{reward.title}"?</h2>
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

export default DeleteReward;
