import AddRewardForm from "../Forms/AddRewardForm";
import Modal from "../UI/Modal";

const AddReward = ({ onClose, edit, rewardId }) => {
  return (
    <Modal onClose={onClose}>
      <AddRewardForm onClose={onClose} edit={edit} rewardId={rewardId}/>
    </Modal>
  );
};

export default AddReward;
