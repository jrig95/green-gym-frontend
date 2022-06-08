import classes from "./UpdateProgram.module.css";
import UpdateProgramForm from "../Forms/UpdateProgramForm";
import Modal from "../UI/Modal";
import LoadingSpinner from "../UI/LoadingSpinner";

const UpdateProgram = ({ programData, programIsLoading, onClose }) => {
  if (programIsLoading)
    return (
      <Modal>
        <LoadingSpinner />
      </Modal>
    );

  return (
    <Modal onClose={onClose}>
      <UpdateProgramForm programData={programData} onClose={onClose} />
    </Modal>
  );
};

export default UpdateProgram;
