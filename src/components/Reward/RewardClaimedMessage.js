import Button from "../UI/Button";
import Modal from "../UI/Modal";
import classes from "./RewardClaimedMessage.module.css";
import { useTranslation } from "react-i18next";


const RewardClaimedMessage = ({ onClose }) => {
  const { t } = useTranslation();
  return (
    <Modal onClose={onClose}>
      <div className={classes.textContainer}>
        <h2>{t("reward_claimed_congrats")}</h2>
        <h3>{t("reward_claimed_message")}</h3>
      </div>
      <div className={classes.buttonContainer}>
        <Button size="small" onClick={onClose}>
          {t("reward_claimed_confirm")}
        </Button>
      </div>
    </Modal>
  );
};

export default RewardClaimedMessage;
