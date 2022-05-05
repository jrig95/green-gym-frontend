import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import classes from "./AddUserToProgram.module.css";

const AddUserToProgram = ({ onClose }) => {
  return (
    <Modal>
      <div className={classes.textContainer}>
        <h2>Select Program</h2>
      </div>
      <div className={classes.formContainer}>
        <form>
          <label htmlFor="program">Program</label>
          <select id="program">
            <option>Select...</option>
            <option>Program Name</option>
            <option>Program Name</option>
            <option>Program Name</option>
            <option>Program Name</option>
            <option>Program Name</option>
          </select>
        </form>
      </div>
      <div className={classes.buttonContainer}>
        <Button size="small" color="blue" onClick={onClose}>
          Cancel
        </Button>
        <Button size="small">Confrim</Button>
      </div>
    </Modal>
  );
};

export default AddUserToProgram;
