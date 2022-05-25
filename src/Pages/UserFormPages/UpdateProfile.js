import { useContext } from "react";

import { useUser } from "../../components/User/hooks/use-user";
import AuthContext from "../../context/AuthContext";
import UpdateProfileForm from "../../components/Forms/UpdateProfileForm";
import UserFormPageTemplate from "./UserFormPageTemplate";

const UpdateProfile = () => {
  // get the user's ID
  const authCtx = useContext(AuthContext);

  console.log(authCtx);
  console.log('hererewrwe')

  // get the user data.
  const { data: userData, isLoading: userIsLoading } = useUser(authCtx.userId);

  if (userIsLoading) return <p>Loading...</p>;

  return (
    <UserFormPageTemplate>
      <UpdateProfileForm user={userData} />
    </UserFormPageTemplate>
  );
};

export default UpdateProfile;
