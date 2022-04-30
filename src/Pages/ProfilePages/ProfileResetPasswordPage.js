import { Fragment } from "react";

import classes from './ProfileResetPasswordPage.module.css';
import Banner from "../../components/Layout/Banner";
import ProfileResetPasswordForm from "../../components/Forms/ProfileResetPasswordForm";

const ProfileResetPasswordPage = () => {
  return (
    <Fragment>
      <Banner title="My Profile" />
      <div className={classes.formContainer}>
        <ProfileResetPasswordForm />
      </div>
    </Fragment>
  );
};

export default ProfileResetPasswordPage;
