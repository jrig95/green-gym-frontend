import { BsCheckCircle } from "react-icons/bs";
import { useState } from "react";

import classes from "./DailyCheckInCard.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const DailyCheckInCard = ({ getCompleted, dwtDailyCheckInCompleted }) => {
  const [checkedIn, setCheckedIn] = useState(dwtDailyCheckInCompleted);

  const checkInHandler = (event) => {
    setCheckedIn(true);
    getCompleted(true);
  };

  const checkInClasses = checkedIn
    ? `${classes.buttonContainer} ${classes.checkedIn}`
    : classes.buttonContainer;

  return (
    <Card className={classes.container}>
      <div className={classes.title}>
        <h1>Daily Check In</h1>
      </div>
      <div className={checkInClasses}>
        <div className={classes.icon}>
          <BsCheckCircle />
        </div>
        <div className={classes.button}>
          <Button onClick={checkInHandler} disabled={checkedIn}>
            {checkedIn ? "Checked In!" : "Check in"}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DailyCheckInCard;
