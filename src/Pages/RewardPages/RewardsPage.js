import { useContext } from "react";

import Rewards from "../../components/Reward/Rewards";
import AuthContext from "../../context/AuthContext";
import { useUser } from "../../components/User/hooks/use-user";

const RewardsPage = () => {
  const authCtx = useContext(AuthContext);
  const { data: userData, isLoading: userIsLoading } = useUser(authCtx.userId);

  const admin = authCtx.isAdmin;

  if (userIsLoading) return <p>Loading</p>;

  const noProgram = userData.programs.length === 0;

  return <Rewards userData={userData} admin={admin} noProgram={noProgram} />;
};

export default RewardsPage;
