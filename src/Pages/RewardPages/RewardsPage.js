import { Fragment } from "react";
import ProfileBanner from "../../components/Profile/ProfileBanner";
import classes from "./RewardsPage.module.css";

const DUMMY_DATA = {
  user_one: {
    name: "Darren Lewis",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    calories: "14532",
  },
};

const RewardsPage = () => {
  return (
    <Fragment>
      <ProfileBanner title="My Rewards" image={DUMMY_DATA.user_one.image} rewards={true} points={23400}/>
    </Fragment>
  );
};

export default RewardsPage;
