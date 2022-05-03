import Button from "../UI/Button";
import Modal from "../UI/Modal";
import classes from "./RewardClaimedMessage.module.css";

const RewardClaimedMessage = ({ onClose }) => {
  return (
    <Modal>
      <div className={classes.textContainer}>
        <h2>Congratulations!</h2>
        <h3>We will be in contact with you shortly to deliver your reward.</h3>
      </div>
      <div className={classes.buttonContainer}>
        <Button size="small" onClick={onClose}>
          Confirm
        </Button>
      </div>
    </Modal>
  );
};

export default RewardClaimedMessage;
