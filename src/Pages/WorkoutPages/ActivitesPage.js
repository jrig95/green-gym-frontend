import { Fragment, useEffect, useState, useContext } from "react";

import NoProgram from "../../components/Program/NoProgram";
import Workout from "../../components/Workout/Workout";
import AuthContext from "../../context/AuthContext";
import { useUser } from "../../components/User/hooks/use-user";
import Banner from "../../components/Layout/Banner";

const ActivitiesPage = () => {
  const authCtx = useContext(AuthContext);
  // get the user
  const { data: userData, isLoading: userIsLoading } = useUser(authCtx.userId);

  
  

  if (userIsLoading) return <p>Loading...</p>

  const noProgram = userData.programs.length === 0;

  return (
    <Fragment>
      <Banner title="My Activites" />
      {noProgram && <NoProgram />}
      {!noProgram && <Workout userData={userData}/>}
    </Fragment>
  );
};

export default ActivitiesPage;
