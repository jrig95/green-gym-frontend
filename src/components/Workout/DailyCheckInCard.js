import { BsCheckCircle } from "react-icons/bs";
import { useState } from "react";

import classes from "./DailyCheckInCard.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const DailyCheckInCard = () => {
  const [checkedIn, setCheckedIn] = useState(false);

  const checkInHandler = (event) => {
    event.preventDefault();
    console.log("hello");
    setCheckedIn(true);
    console.log(checkedIn);
  };

  const checkInClasses = checkedIn
    ? `${classes.buttonContainer} ${classes.checkedIn}`
    : classes.buttonContainer;

  return (
    <Card className={classes.container}>
      <h1>Daily Check In</h1>
      <div className={checkInClasses}>
        <BsCheckCircle />
        <Button onClick={checkInHandler} disabled={checkedIn}>
          {checkedIn ? "Checked In!" : "Check in"}
        </Button>
      </div>
    </Card>
  );
};

export default DailyCheckInCard;
