import Button from "../UI/Button";
import Modal from "../UI/Modal";
import classes from "./ClaimReward.module.css";

const ClaimReward = ({ rewardName, rewardCost, userPoints }) => {
  return (
    <Modal>
      <div className={classes.textContainer}>
        <h2>Are you sure you wish to claim this reward?</h2>
        <h2 className={classes.rewardName}>[reward name]</h2>
        <h2>You will have [num of points] remaining</h2>
      </div>
      <div className={classes.buttonContainer}>
        <Button size="small" color="blue">
          Cancel
        </Button>
        <Button size="small">Claim</Button>
      </div>
    </Modal>
  );
};

export default ClaimReward;
