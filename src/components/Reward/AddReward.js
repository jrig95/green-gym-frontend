import AddRewardForm from "../Forms/AddRewardForm";
import Modal from "../UI/Modal";

const AddReward = ({ onClose }) => {
  return (
    <Modal>
      <AddRewardForm onClose={onClose} />
    </Modal>
  );
};

export default AddReward;
