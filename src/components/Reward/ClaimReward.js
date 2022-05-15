import { Fragment } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import classes from "./ClaimReward.module.css";

const ClaimReward = ({
  rewardTitle,
  rewardPoints,
  userPoints,
  onClose,
  onClaim,
}) => {
  console.log(rewardTitle, "line 6 - ClaimReward");

  const parseRewardPoints = parseInt(rewardPoints);
  const parseUserPoints = parseInt(userPoints);
  const remainingPoints = parseUserPoints - parseRewardPoints;
  const strigifiedReamingPoints = remainingPoints.toLocaleString("en-US");

  const enoughPoints = parseUserPoints > parseRewardPoints;

  const claimMessage = (
    <Fragment>
      <div className={classes.textContainer}>
        <h2>Are you sure you wish to claim this reward?</h2>
        <h2 className={classes.rewardName}>{rewardTitle}</h2>
        <h2>You will have {strigifiedReamingPoints} points remaining</h2>
      </div>
      <div className={classes.buttonContainer}>
        <Button size="small" color="blue" onClick={onClose}>
          Cancel
        </Button>
        <Button size="small" onClick={onClaim}>
          Claim
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
        <Button size="small" onClick={onClose}>
          Confirm
        </Button>
      </div>
    </Fragment>
  );

  return <Modal onClose={onClose}>{enoughPoints ? claimMessage : notEnoughPointsMessage}</Modal>;
};

export default ClaimReward;
