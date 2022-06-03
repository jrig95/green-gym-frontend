import { useProgram } from "../../Program/hooks/use-program";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import classes from "./AddedMembersToProgramMessage.module.css";

const AddedMembersToProgramMessage = ({ memebers, programId }) => {
  // const { data: programData, isLoading: programIsLoading } =
  //   useProgram(programId);

  return (
    <Modal>
      <div className={classes.messageContainer}>
        <h2>You Have added the following to: </h2>
        <h1>Message</h1>
        <p>List of Names</p>
      </div>
      <div className={classes.buttonContainer}>
        <Button>OK</Button>
      </div>
    </Modal>
  );
};

export default AddedMembersToProgramMessage;
