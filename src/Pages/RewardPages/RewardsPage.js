import { useQuery } from "react-query";
import { Fragment, useState } from "react";

import { useRewards } from "../../components/Reward/Hooks/use-rewards";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import RewardClaimedMessage from "../../components/Reward/RewardClaimedMessage";
import ProfileBanner from "../../components/Profile/ProfileBanner";
import RewardCard from "../../components/Reward/RewardCard";
import classes from "./RewardsPage.module.css";
import ClaimReward from "../../components/Reward/ClaimReward";
import AdminBanner from "../../components/AdminComponents/Layout/AdminBanner";
import DeleteReward from "../../components/Reward/DeleteReward";

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
  const [claimedRewardMessageIsShown, setClaimedRewardMessageIsShown] =
    useState(false);
  const [claimRewardIsShown, setClaimRewardIsShown] = useState(false);
  const [claimedRewardTitle, setClaimedRewardTitle] = useState("");
  const [claimedRewardPoints, setClaimedRewardPoints] = useState("");

  const [deleteRewardIsShown, setDeleteRewardIsShown] = useState(false);
  // this can be changed later and used by context
  const admin = true;

  const { data, isError, error, isLoading } = useRewards();

  const programRewardsArray = data.filter(
    (reward) => parseInt(reward.program_id) === DUMMY_DATA.user_one.id
  );

  // Create an array based on rewards that do not have a program_id
  const rewardsArray = data.filter((reward) => reward.program_id === null);

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

  const showDeleteRewardHandler = () => {
    setDeleteRewardIsShown(true);
  };

  const hideDeleteRewardHandler = () => {
    setDeleteRewardIsShown(false);
  };

  const deleteRewardHandler = (rewardId) => {
    console.log(rewardId);
  };

  const programRewards = programRewardsArray.map((reward) => {
    return (
      <RewardCard
        key={reward.id}
        title={reward.reward_name}
        points={reward.reward_points}
        image={reward.reward_image}
        onClaimReward={() =>
          showClaimRewardHandler(reward.reward_name, reward.reward_points)
        }
        onDelete={showDeleteRewardHandler}
      />
    );
  });

  const rewards = rewardsArray.map((reward) => {
    return (
      <RewardCard
        key={reward.id}
        title={reward.reward_name}
        points={reward.reward_points}
        image={reward.reward_image}
        onClaimReward={() =>
          showClaimRewardHandler(reward.reward_name, reward.reward_points)
        }
        onDelete={showDeleteRewardHandler}
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
          onDelete={() => deleteRewardHandler({ title: "test" })}
          reward={{ title: "test" }}
        />
      )}
      <div className={classes.container}>
        {isError && <div>Error...{error.toString()}</div>}
        <div className={classes.rewardsGrid}>{rewards}</div>
      </div>
    </Fragment>
  );
};

export default RewardsPage;
