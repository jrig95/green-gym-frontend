import { Fragment } from "react";

import { useGetMembers } from "../../components/AdminComponents/Members/hooks/use-members";
import Modal from "../../components/UI/Modal";
import MembersList from "../../components/AdminComponents/Members/MembersList";
import classes from "./MembersPage.module.css";
import AdminBanner from "../../components/AdminComponents/Layout/AdminBanner";
import Sort from "../../components/AdminComponents/Members/Sort";

const MembersPage = () => {
  // create hook to get all members
  const { data: membersData, isLoading } = useGetMembers();

  // render loading
  if (isLoading) return <p>Loading...</p>

  return (
    <Fragment>
      <AdminBanner members={true} searchBar={true}/>
      <div className={classes.container}>
        <Sort />
        < MembersList members={membersData}/>
      </div>
    </Fragment>
  );
};

export default MembersPage;
