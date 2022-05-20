import UpdateRewardForm from "../Forms/UpdateRewardForm";
import Modal from "../UI/Modal";

const UpdateReward = ({ onClose, rewardId }) => {
  return (
    <Modal onClose={onClose}>
      <UpdateRewardForm onClose={onClose} rewardId={rewardId}/>
    </Modal>
  );
};

export default UpdateReward;