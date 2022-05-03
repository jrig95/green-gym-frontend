import classes from "./MembersPage.module.css";
import AdminBanner from "../../components/AdminComponents/Layout/AdminBanner";
import { Fragment } from "react";
import Sort from "../../components/AdminComponents/Members/Sort";

const MembersPage = () => {
  return (
    <Fragment>
      <AdminBanner />
      <Sort />
    </Fragment>
  );
};

export default MembersPage;
