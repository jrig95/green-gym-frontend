import { Link } from "react-router-dom";

import classes from "./ProfileCard.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useTranslation } from "react-i18next";


const ProfileCard = () => {
  const { t } = useTranslation();
  return (
    <Card className={classes.card}>
      <Link to="update">
        <Button>{t("profile_card_update_profile")}</Button>
      </Link>
      <Link to="change-password">
        <Button>{t("profile_card_change_password")}</Button>
      </Link>
    </Card>
  );
};

export default ProfileCard;
