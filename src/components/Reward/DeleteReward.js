import Button from "../UI/Button";
import classes from "./DeleteReward.module.css";
import Modal from "../UI/Modal";
import { useTranslation } from "react-i18next";


const DeleteReward = ({ onDelete, onClose, reward}) => {
  const { t } = useTranslation();
  return (
    <Modal onClose={onClose}>
      <div className={classes.textContainer}>
        <h2>
          {t("delete_reward_are_you_sure")}
          "{reward}"?</h2>
      </div>
      <div className={classes.buttonContainer}>
        <Button size="small" color="blue" onClick={onClose}>
          {t("delete_reward_cancel")}
        </Button>
        <Button size="small" onClick={onDelete}>
          {t("delete_reward_delete")}
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteReward;
