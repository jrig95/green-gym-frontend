import { useParams } from "react-router-dom";
import { Fragment } from "react";

import { useUser } from "../../components/User/hooks/use-user";
import { getIdFromSlug } from "../../utils/get-id-from-slug";
import MemberTrackerCard from "../../components/AdminComponents/Members/MemberTrackerCard";
import classes from "./MemberPage.module.css";
import AdminBanner from "../../components/AdminComponents/Layout/AdminBanner";
import MemberCard from "../../components/AdminComponents/Members/MemberCard";

const MemberPage = () => {
  const params = useParams();

  const memberId = getIdFromSlug(params.memberId);

  const { data: userData, isLoading: userIsLoading } = useUser(memberId);

  const programTitle = userData.programs[0].program_title;

  if (userIsLoading) return <p>Loading...</p>

  return (
    <Fragment>
      <AdminBanner />
      <div className={classes.container}>
        <MemberCard user={userData}/>
        <h1>{programTitle}</h1>
        <h2>Day 1</h2>
        <MemberTrackerCard />
      </div>
    </Fragment>
  );
};

export default MemberPage;
