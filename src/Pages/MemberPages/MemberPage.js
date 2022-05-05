import { Fragment } from "react";

import MemberTrackerCard from "../../components/AdminComponents/Members/MemberTrackerCard";
import classes from "./MemberPage.module.css";
import AdminBanner from "../../components/AdminComponents/Layout/AdminBanner";
import MemberCard from "../../components/AdminComponents/Members/MemberCard";

const MemberPage = () => {
  return (
    <Fragment>
      <AdminBanner />
      <div className={classes.container}>
        <MemberCard />
        <h1>Program Name</h1>
        <h2>Day 1</h2>
        <MemberTrackerCard />
      </div>
    </Fragment>
  );
};

export default MemberPage;
