import { Fragment, useContext } from "react";

import { getIdsFromSlug } from "../../utils/get-ids-from-slug";
import { useUser } from "../../components/User/hooks/use-user";
import { useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Banner from "../../components/Layout/Banner";
import classes from './DailyWorkoutPage.module.css';
import DailyWorkout from "../../components/Exercise/DailyWorkout";

const DailyWorkoutPage = () => {
  const authCtx = useContext(AuthContext);
  const params = useParams();

  const { data: userData, isLoading: userIsLoading } = useUser(authCtx.userId);

  const ids = getIdsFromSlug(params.workoutId);

  if (userIsLoading) return <p>Loading....</p> 

  return (
    <Fragment>
      <Banner title="Daily Workout" />
      <div className={classes.container}>
        <DailyWorkout userData={userData} ids={ids} />
      </div>
    </Fragment>
  );
};

export default DailyWorkoutPage;
