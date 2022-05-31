import { useState } from "react";
import { GiBiceps } from "react-icons/gi";

import classes from "./DailyChallengeCard.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const DailyChallengeCard = ({ getCompleted, dwtChallengeCompleted }) => {
  const [challengeIsCompleted, setChallengeIsCompleted] = useState(dwtChallengeCompleted);

  const challengeCompletedHandler = () => {
    setChallengeIsCompleted(true);
    getCompleted(true);
  };

  const iconClasses = challengeIsCompleted
    ? `${classes.icon} ${classes.checkedIn}`
    : classes.icon;

  return (
    <Card className={classes.container}>
      <div className={classes.title}>
        <h1>Daily Challenge</h1>
      </div>
      <div className={classes.description}>
        <p>Daily challenge description.</p>
      </div>
      <div className={iconClasses}>
        <GiBiceps />
      </div>
      <div className={classes.button}>
        <Button onClick={challengeCompletedHandler} disabled={challengeIsCompleted}>Do it</Button>
      </div>
    </Card>
  );
};

export default DailyChallengeCard;
