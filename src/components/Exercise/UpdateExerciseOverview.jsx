import Modal from "../UI/Modal";
import UpdateExerciseOverviewForm from "../Forms/UpdateExerciseOverviewForm";

const UpdateExerciseOverview = ({ onClose, exercise, programId }) => {
  return (
    <Modal onClose={onClose}>
      <UpdateExerciseOverviewForm onClose={onClose} exercise={exercise} programId={programId} />
    </Modal>
  );
};

export default UpdateExerciseOverview;
