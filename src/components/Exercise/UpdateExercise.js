import Modal from "../UI/Modal";
import UpdateExerciseForm from "../Forms/UpdateExerciseForm";
import classes from "./UpdateExercise.module.css";

const UpdateExercise = ({ onClose, exercise }) => {
  // TODO:

  return (
    <Modal onClose={onClose}>
      <UpdateExerciseForm onClose={onClose} exercise={exercise} />
    </Modal>
  );
};

export default UpdateExercise;
