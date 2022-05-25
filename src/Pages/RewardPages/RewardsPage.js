import { Fragment, useState, useContext } from "react";

import AuthContext from "../../context/AuthContext";
import { useDeleteReward } from "../../components/Reward/hooks/use-delete-reward";
import { useRewards } from "../../components/Reward/hooks/use-rewards";
import RewardClaimedMessage from "../../components/Reward/RewardClaimedMessage";
import ProfileBanner from "../../components/Profile/ProfileBanner";
import RewardCard from "../../components/Reward/RewardCard";
import classes from "./RewardsPage.module.css";
import ClaimReward from "../../components/Reward/ClaimReward";
import AdminBanner from "../../components/AdminComponents/Layout/AdminBanner";
import DeleteReward from "../../components/Reward/DeleteReward";
import { useUser } from "../../components/User/hooks/use-user";

const DUMMY_DATA = {
  user_one: {
    id: 1,
    name: "Darren Lewis",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    calories: "14532",
  },
};

const RewardsPage = () => {
  const authCtx = useContext(AuthContext);
  const deleteReward = useDeleteReward();
  const { data: userData, isLoading: userIsLoading } = useUser(authCtx.userId);

  console.log(userData);

  const [claimedRewardMessageIsShown, setClaimedRewardMessageIsShown] =
    useState(false);
  const [claimRewardIsShown, setClaimRewardIsShown] = useState(false);
  const [claimedRewardTitle, setClaimedRewardTitle] = useState("");
  const [claimedRewardPoints, setClaimedRewardPoints] = useState("");
  const [reward, setReward] = useState({ id: 0, reward_name: "" });

  const [deleteRewardIsShown, setDeleteRewardIsShown] = useState(false);
  // this can be changed later and used by context
  const admin = authCtx.isAdmin;

  const { data: rewardData } = useRewards();


  const programRewardsArray = rewardData.filter(
    (reward) => parseInt(reward.program_id) === DUMMY_DATA.user_one.id
  );

  // Create an array based on rewards that do not have a program_id
  const rewardsArray = rewardData.filter((reward) => reward.program_id === null);

  const showClaimRewardHandler = (rewardTitle, rewardPoints) => {
    setClaimedRewardTitle(rewardTitle);
    setClaimedRewardPoints(rewardPoints);
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
          showClaimRewardHandler(reward.reward_name, reward.reward_points)
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
          showClaimRewardHandler(reward.reward_name, reward.reward_points)
        }
        onDelete={() =>
          showDeleteRewardHandler({
            id: reward.id,
            reward_name: reward.reward_name,
          })
        }
        onUpdate={() => console.log('edit')}
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
      {!admin && (
        <ProfileBanner
          title="My Rewards"
          image={DUMMY_DATA.user_one.image}
          rewards={true}
          points={23400}
          calories={23400}
        />
      )}
      {admin && <AdminBanner rewards />}
      {programRewards.length > 0 && (
        <Fragment>
          <div className={classes.programRewardsContainer}>
            <h1 className={classes.programRewardsTitle}>Just for you</h1>
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
        <div className={classes.rewardsGrid}>{rewards}</div>
      </div>
    </Fragment>
  );
};

export default RewardsPage;
