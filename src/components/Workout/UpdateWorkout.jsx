import Modal from "../UI/Modal";
import UpdateWorkoutForm from "../Forms/UpdateWorkoutForm";
import LoadingSpinner from "../UI/LoadingSpinner";

const UpdateWorkout = ({ onClose, workoutData, workoutIsLoading }) => {

  if (workoutIsLoading) return <LoadingSpinner />

  return (
    <Modal onClose={onClose}>
      <UpdateWorkoutForm onClose={onClose} workoutData={workoutData}/>
    </Modal>
  );
};

export default UpdateWorkout;
