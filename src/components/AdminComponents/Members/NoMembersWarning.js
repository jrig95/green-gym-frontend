import classes from "./NoMembersWarning.module.css";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal";

const NoMembersWarning = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className={classes.container}>
        <h1 className={classes.text}>
          Please select members from the list before adding to the program.
        </h1>
        <Button size="small" onClick={onClose}>OK</Button>
      </div>
    </Modal>
  );
};

export default NoMembersWarning;
