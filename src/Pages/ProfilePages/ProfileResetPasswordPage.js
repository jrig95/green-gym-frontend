import { Fragment } from "react";

import classes from './ProfileResetPasswordPage.module.css';
import Banner from "../../components/Layout/Banner";
import ProfileResetPasswordForm from "../../components/Forms/ProfileResetPasswordForm";
import { useTranslation } from "react-i18next";

const ProfileResetPasswordPage = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Banner title= {t("profile_reset_password_page_my_profile")}/>
      <div className={classes.formContainer}>
        <ProfileResetPasswordForm />
      </div>
    </Fragment>
  );
};

export default ProfileResetPasswordPage;
