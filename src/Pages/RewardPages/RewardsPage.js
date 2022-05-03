import { Fragment, useState } from "react";
import ProfileBanner from "../../components/Profile/ProfileBanner";
import RewardCard from "../../components/Reward/RewardCard";
import classes from "./RewardsPage.module.css";

import data from "../../rewards.json";
import ClaimReward from "../../components/Reward/ClaimReward";

const DUMMY_DATA = {
  user_one: {
    name: "Darren Lewis",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    calories: "14532",
  },
};

const RewardsPage = () => {
  const [claimRewardIsShown, setClaimRewardIsShown] = useState(false);
  const [claimedRewardTitle, setClaimedRewardTitle] = useState("");
  const [claimedRewardPoints, setClaimedRewardPoints] = useState("");

  // This will match a reward from the programs the user is a part of
  const programRewardsArray = data.filter(
    (reward) => parseInt(reward.program_id) === 1
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
    console.log(`The user has claimed ${claimedRewardTitle} for ${claimedRewardPoints}`);
  }

  const programRewards = programRewardsArray.map((reward) => {
    return (
      <RewardCard
        key={reward.id}
        title={reward.title}
        points={reward.points}
        image={reward.image}
        onClaimReward={() =>
          showClaimRewardHandler(reward.title, reward.points)
        }
      />
    );
  });

  const rewards = rewardsArray.map((reward) => {
    return (
      <RewardCard
        key={reward.id}
        title={reward.title}
        points={reward.points}
        image={reward.image}
        onClaimReward={() =>
          showClaimRewardHandler(reward.title, reward.points)
        }
      />
    );
  });

  return (
    <Fragment>
      {claimRewardIsShown && (
        <ClaimReward
          rewardTitle={claimedRewardTitle}
          rewardPoints={claimedRewardPoints}
          userPoints={23400}
          onClose={hideClaimRewardHandler}
          onClaim={claimRewardHandler}
        />
      )}
      <ProfileBanner
        title="My Rewards"
        image={DUMMY_DATA.user_one.image}
        rewards={true}
        points={23400}
      />
      {programRewards.length > 0 && (
        <Fragment>
          <div className={classes.programRewardsContainer}>
            <h1 className={classes.programRewardsTitle}>Just for you</h1>
            <div className={classes.programRewardsGrid}>{programRewards}</div>
            <h1 className={classes.rewardsTitle}>General Rewards</h1>
          </div>
        </Fragment>
      )}
      <div className={classes.container}>
        <div className={classes.rewardsGrid}>{rewards}</div>
      </div>
    </Fragment>
  );
};

export default RewardsPage;
