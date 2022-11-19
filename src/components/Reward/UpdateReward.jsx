import UpdateRewardForm from "../Forms/UpdateRewardForm";
import Modal from "../UI/Modal";

const UpdateReward = ({ onClose, reward }) => {
  return (
    <Modal onClose={onClose}>
      <UpdateRewardForm onClose={onClose} reward={reward}/>
    </Modal>
  );
};

export default UpdateReward;