import { Fragment } from "react";

import MembersList from "../../components/AdminComponents/Members/MembersList";
import classes from "./MembersPage.module.css";
import AdminBanner from "../../components/AdminComponents/Layout/AdminBanner";
import Sort from "../../components/AdminComponents/Members/Sort";

const MembersPage = () => {
  return (
    <Fragment>
      <AdminBanner />
      <div className={classes.container}>
        <Sort />
        < MembersList />
      </div>
    </Fragment>
  );
};

export default MembersPage;
