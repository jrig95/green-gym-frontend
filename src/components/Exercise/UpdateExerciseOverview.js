import Modal from "../UI/Modal";
import UpdateExerciseOverviewForm from "../Forms/UpdateExerciseOverviewForm";

const UpdateExerciseOverview = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <UpdateExerciseOverviewForm onClose={onClose} />
    </Modal>
  );
};

export default UpdateExerciseOverview;
