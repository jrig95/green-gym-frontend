import Modal from "../UI/Modal";
import UpdateExerciseForm from "../Forms/UpdateExerciseForm";

const UpdateExercise = ({ onClose, exercise, programId, DailyWorkoutId }) => {
  // TODO:

  return (
    <Modal onClose={onClose}>
      <UpdateExerciseForm
        onClose={onClose}
        exercise={exercise}
        programId={programId}
        DailyWorkoutId={DailyWorkoutId}
      />
    </Modal>
  );
};

export default UpdateExercise;
