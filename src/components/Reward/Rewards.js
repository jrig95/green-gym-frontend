import { Fragment, useState, useContext } from "react";

import AuthContext from "../../context/AuthContext";
import { useDeleteReward } from "./hooks/use-delete-reward";
import { useRewards } from "./hooks/use-rewards";
import RewardClaimedMessage from "./RewardClaimedMessage";
import ProfileBanner from "../Profile/ProfileBanner";
import RewardCard from "./RewardCard";
import classes from "./Rewards.module.css";
import ClaimReward from "./ClaimReward";
import AdminBanner from "../AdminComponents/Layout/AdminBanner";
import DeleteReward from "./DeleteReward";
import Banner from "../Layout/Banner";

const Rewards = ({ userData, admin, noProgram }) => {
  const authCtx = useContext(AuthContext);
  const deleteReward = useDeleteReward();

  // const noProgram = userData.programs.length === 0;
  const [claimedRewardMessageIsShown, setClaimedRewardMessageIsShown] =
    useState(false);
  const [claimRewardIsShown, setClaimRewardIsShown] = useState(false);
  const [claimedRewardTitle, setClaimedRewardTitle] = useState("");
  const [claimedRewardPoints, setClaimedRewardPoints] = useState("");
  const [reward, setReward] = useState({
    id: 0,
    reward_name: "",
    reward_points: 0,
  });

  const [deleteRewardIsShown, setDeleteRewardIsShown] = useState(false);

  const { data: rewardData } = useRewards();

  console.log(userData.user_points);

  let programTitle;
  let programId;

  if (!admin && !noProgram) {
    programTitle = userData.programs[0].program_title;
    programId = userData.programs[0].id;
  }

  const programRewardsArray = rewardData.filter(
    (reward) => parseInt(reward.program_id) === programId
  );
  // Create an array based on rewards that do not have a program_id
  const rewardsArray = rewardData.filter(
    (reward) => reward.program_id === null
  );

  const showClaimRewardHandler = (reward) => {
    setReward(reward);
    setClaimedRewardTitle(reward.reward_title);
    setClaimedRewardPoints(reward.reward_points);
    setClaimRewardIsShown(true);
  };

  const hideClaimRewardHandler = () => {
    setClaimRewardIsShown(false);
  };

  const claimRewardHandler = () => {
    setClaimRewardIsShown(false);
    setClaimedRewardMessageIsShown(true);

    // Here we need to send an email to the Admin to notify them that a reward has been claimed.
    console.log(
      `The user has claimed ${claimedRewardTitle} for ${claimedRewardPoints}`
    );

    const reward_tracker = {
      user_id: userData.id,
      reward_id: reward.id,
    };

    console.log(reward_tracker);

    // TODO: Add post requestion with user id and rewards id
  };

  const hideClaimedRewardMessageHandler = () => {
    setClaimedRewardMessageIsShown(false);
  };

  const showDeleteRewardHandler = (reward) => {
    setReward(reward);
    setDeleteRewardIsShown(true);
  };

  const hideDeleteRewardHandler = () => {
    setDeleteRewardIsShown(false);
  };

  const deleteRewardHandler = (id) => {
    deleteReward(id);
    hideDeleteRewardHandler();
  };

  // return no program page here

  const programRewards = programRewardsArray.map((reward) => {
    return (
      <RewardCard
        key={reward.id}
        id={reward.id}
        admin={admin}
        title={reward.reward_name}
        points={reward.reward_points}
        image={reward.photo_url}
        onClaimReward={() =>
          showClaimRewardHandler({
            id: reward.id,
            reward_title: reward.reward_name,
            reward_points: reward.reward_points,
          })
        }
        onDelete={() =>
          showDeleteRewardHandler({
            id: reward.id,
            reward_name: reward.reward_name,
          })
        }
      />
    );
  });

  const rewards = rewardsArray.map((reward) => {
    return (
      <RewardCard
        key={reward.id}
        id={reward.id}
        admin={admin}
        title={reward.reward_name}
        points={reward.reward_points}
        image={reward.photo_url}
        onClaimReward={() =>
          showClaimRewardHandler({
            id: reward.id,
            reward_title: reward.reward_name,
            reward_points: reward.reward_points,
          })
        }
        onDelete={() =>
          showDeleteRewardHandler({
            id: reward.id,
            reward_name: reward.reward_name,
          })
        }
        onUpdate={() => console.log("edit")}
      />
    );
  });

  const adminRewards = rewardData.map((reward) => {
    return (
      <RewardCard
        key={reward.id}
        id={reward.id}
        admin={admin}
        title={reward.reward_name}
        points={reward.reward_points}
        image={reward.photo_url}
        onClaimReward={() =>
          showClaimRewardHandler({
            id: reward.id,
            reward_title: reward.reward_name,
            reward_points: reward.reward_points,
          })
        }
        onDelete={() => {
          showDeleteRewardHandler({
            id: reward.id,
            reward_name: reward.reward_name,
          });
        }}
        onUpdate={() => console.log("edit")}
      />
    );
  });

  return (
    <Fragment>
      {claimedRewardMessageIsShown && (
        <RewardClaimedMessage onClose={hideClaimedRewardMessageHandler} />
      )}
      {claimRewardIsShown && (
        <ClaimReward
          rewardTitle={claimedRewardTitle}
          rewardPoints={claimedRewardPoints}
          userPoints={23400}
          onClose={hideClaimRewardHandler}
          onClaim={claimRewardHandler}
        />
      )}
      {!admin && !noProgram && (
        <ProfileBanner
          title="My Rewards"
          image={userData.photo_url}
          rewards={true}
          points={userData.user_points}
          calories={userData.user_total_calories}
        />
      )}
      {noProgram && !admin && <Banner title="Rewards" />}
      {admin && <AdminBanner rewards />}
      {programRewards.length > 0 && (
        <Fragment>
          <div className={classes.programRewardsContainer}>
            <h1 className={classes.programRewardsTitle}>
              Rewards for {programTitle}
            </h1>
            <div className={classes.programRewardsGrid}>{programRewards}</div>
            <h1 className={classes.rewardsTitle}>General Rewards</h1>
          </div>
        </Fragment>
      )}
      {deleteRewardIsShown && (
        <DeleteReward
          onClose={hideDeleteRewardHandler}
          onDelete={() => deleteRewardHandler(reward.id)}
          reward={reward.reward_name}
        />
      )}
      <div className={classes.container}>
        <div className={classes.rewardsGrid}>
          {admin ? adminRewards : rewards}
        </div>
      </div>
    </Fragment>
  );
};

export default Rewards;
