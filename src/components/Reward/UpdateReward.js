import { useReward } from "../Reward/hooks/use-reward";
import UpdateRewardForm from "../Forms/UpdateRewardForm";
import Modal from "../UI/Modal";

const UpdateReward = ({ onClose, reward }) => {
  // Call the reward in here. Only render form if data is there. If not say loading.
  // const { data, isLoading } = useReward(rewardId);

  // console.log(data, "updateReward")
  return (
    <Modal onClose={onClose}>
      <UpdateRewardForm onClose={onClose} reward={reward}/>
    </Modal>
  );
};

export default UpdateReward;