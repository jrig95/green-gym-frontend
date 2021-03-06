import { BsCheckCircle } from "react-icons/bs";
import { useState } from "react";

import classes from "./DailyCheckInCard.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useTranslation } from "react-i18next";

const DailyCheckInCard = ({ getCompleted, dwtDailyCheckInCompleted }) => {
  const { t } = useTranslation();
  const [checkedIn, setCheckedIn] = useState(false);

  const checkInHandler = (event) => {
    setCheckedIn(true);
    getCompleted(true);
  };

  const checkInClasses = dwtDailyCheckInCompleted || checkedIn
    ? `${classes.buttonContainer} ${classes.checkedIn}`
    : classes.buttonContainer;

  const translateCheckedIn = t("daily_checked_in_card_checked_in")
  const checkIn = t("daily_checked_in_card_check_in")
  return (
    <Card className={classes.container}>
      <div className={classes.title}>
        <h1>{t("daily_check_in_card_daily_check_in")}</h1>
      </div>
      <div className={checkInClasses}>
        <div className={classes.icon}>
          <BsCheckCircle />
        </div>
        <div className={classes.button}>
          <Button onClick={checkInHandler} disabled={dwtDailyCheckInCompleted || checkedIn}>
            {dwtDailyCheckInCompleted ? translateCheckedIn : checkIn}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DailyCheckInCard;
