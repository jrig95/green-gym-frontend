import { useProgram } from "../../Program/hooks/use-program";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import classes from "./AddedMembersToProgramMessage.module.css";

const AddedMembersToProgramMessage = ({ onClose, memebers, programId }) => {
  // const { data: programData, isLoading: programIsLoading } =
  //   useProgram(programId);

  console.log(memebers);
  // console.log(programId);

  const memebersList = memebers.map((member) => {
    return <h3 key={member.id}>{member.name}</h3>;
  });

  return (
    <Modal onClose={onClose}>
      <div className={classes.messageContainer}>
        <h2>You Have added the following users to a new Program. </h2>
        <div>{memebersList}</div>
        <div className={classes.buttonContainer}>
          <Button onClick={onClose}>OK</Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddedMembersToProgramMessage;
