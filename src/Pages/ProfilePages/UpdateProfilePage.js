import { useContext } from "react";

import LoadingSpinnerLarge from "../../components/UI/LoadingSpinnerLarge";
import { createFullName } from "../../utils/create-full-name";
import AuthContext from "../../context/AuthContext";
import { useUser } from "../../components/User/hooks/use-user";
import ProfileBanner from "../../components/Profile/ProfileBanner";
import UpdateProfileForm from "../../components/Forms/UpdateProfileForm";
import classes from './UpdateProfilePage.module.css';


const UpdateProfilePage = () => {
  const authCtx = useContext(AuthContext);

  const { data: userData, isLoading: userIsLoading } = useUser(authCtx.userId);

  if (userIsLoading) return <LoadingSpinnerLarge />

  const fullName = createFullName(userData.first_name, userData.last_name);

  return (
    <>
      <ProfileBanner
        title="My Profile"
        // calories={DUMMY_DATA.user_one.calories}
        name={fullName}
        image={userData.photo_url}
        update={true}
      />
      <div className={classes.updateProfileFormContainer}>
        <UpdateProfileForm user={userData}/>
      </div>
    </>
  );
};

export default UpdateProfilePage;