import { useContext } from "react";

import { createFullName } from "../../utils/create-full-name";
import AuthContext from "../../context/AuthContext";
import { useUser } from "../../components/User/hooks/use-user";
import ProfileBanner from "../../components/Profile/ProfileBanner";
import ProfileCard from "../../components/Profile/ProfileCard";
import classes from "./ProfilePage.module.css";
import { useTranslation } from "react-i18next";

const ProfilePage = () => {
  const { t } = useTranslation();
  const authCtx = useContext(AuthContext);

  const { data: userData, isLoading } = useUser(authCtx.userId);

  if (isLoading) return <p>{t("profile_page_loading")}</p>;

  const fullName = createFullName(userData.first_name, userData.last_name);

  return (
    <>      <ProfileBanner
        title={t("profile_page_my_profile")}
        calories={userData.user_total_calories}
        points={userData.user_points}
        name={fullName}
        image={userData.photo_url}
      />
      <div className={classes.profileCardContainer}>
        <ProfileCard />
      </div>
    </>
  );
};

export default ProfilePage;
