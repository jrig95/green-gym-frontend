import { useIsMutating } from "react-query";
import { Fragment } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import classes from "./ClaimReward.module.css";
import LoadingSpinnerButton from '../UI/LoadingSpinnerButton';
import { useTranslation } from "react-i18next";


const ClaimReward = ({
  rewardTitle,
  rewardPoints,
  userPoints,
  onClose,
  onClaim,
}) => {
  const { t } = useTranslation();
  const isMutating = useIsMutating();

  const parseRewardPoints = parseInt(rewardPoints);
  const parseUserPoints = parseInt(userPoints);
  const remainingPoints = parseUserPoints - parseRewardPoints;
  const strigifiedReamingPoints = remainingPoints.toLocaleString("en-US");

  const enoughPoints = parseUserPoints > parseRewardPoints;

  const claimedRewardClaim = t("claimed_reward_claim")
  const claimMessage = (
    <Fragment>
      <div className={classes.textContainer}>
        <h2>{t("claimed_reward_confirmation")}</h2>
        <h2 className={classes.rewardName}>{rewardTitle}</h2>
        <h2>{t("claimed_reward_you_will_have")} {strigifiedReamingPoints} {t("claimed_reward_points_remaining")}</h2>
      </div>
      <div className={classes.buttonContainer}>
        <Button size="small" color="blue" onClick={onClose}>
          {t("claimed_reward_cancel")}
        </Button>
        <Button size="small" onClick={onClaim}>
          {isMutating ? <LoadingSpinnerButton /> : claimedRewardClaim}
        </Button>
      </div>
    </Fragment>
  );

  const notEnoughPointsMessage = (
    <Fragment>
      <div className={classes.textContainer}>
        <h2>I'm sorry. You don't have enough points for this prize</h2>
      </div>
      <div className={classes.buttonContainer}>
        <Button size="small" onClick={onClose} disabled={isMutating}>
          Confirm
        </Button>
      </div>
    </Fragment>
  );

  return <Modal onClose={onClose}>{enoughPoints ? claimMessage : notEnoughPointsMessage}</Modal>;
};

export default ClaimReward;
