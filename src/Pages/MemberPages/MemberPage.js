import { useParams } from "react-router-dom";
import { Fragment } from "react";

import LoadingSpinnerLarge from "../../components/UI/LoadingSpinnerLarge";
import { useUser } from "../../components/User/hooks/use-user";
import { getIdFromSlug } from "../../utils/get-id-from-slug";
import MemberTracker from "../../components/AdminComponents/Members/MemberTracker";
import classes from "./MemberPage.module.css";
import AdminBanner from "../../components/AdminComponents/Layout/AdminBanner";
import MemberCard from "../../components/AdminComponents/Members/MemberCard";

const MemberPage = () => {
  const params = useParams();

  const memberId = getIdFromSlug(params.memberId);

  const { data: userData, isLoading: userIsLoading } = useUser(memberId);

  if (userIsLoading) return <LoadingSpinnerLarge />
  
  const programTitle = userData.programs[0].program_title;
  const porgramId = userData.programs[0].id
  const trackerId = userData.program_trackers[0].id;
  
  return (
    <Fragment>
      <AdminBanner />
      <div className={classes.container}>
        <MemberCard user={userData}/>
        <h1>{programTitle}</h1>
        <MemberTracker trackerId={trackerId} programId={porgramId}/>
      </div>
    </Fragment>
  );
};

export default MemberPage;
