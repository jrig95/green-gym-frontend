import { useState } from "react";
import { GiBiceps } from "react-icons/gi";

import classes from "./DailyChallengeCard.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const DailyChallengeCard = ({ getCompleted, dwtChallengeCompleted, dailyChallenge }) => {
  const [challengeIsCompleted, setChallengeIsCompleted] = useState(false);

  const challengeCompletedHandler = () => {
    setChallengeIsCompleted(true);
    getCompleted(true);
  };

  console.log(dailyChallenge);

  const iconClasses = dwtChallengeCompleted
    ? `${classes.icon} ${classes.checkedIn}`
    : classes.icon;

  const buttonMessage = dwtChallengeCompleted ? "Done it!" : "Do it!";

  return (
    <Card className={classes.container}>
      <div className={classes.title}>
        <h1>{dailyChallenge.title}</h1>
      </div>
      <div className={classes.description}>
        <p>{dailyChallenge.description}</p>
      </div>
      <div className={iconClasses}>
        <GiBiceps />
      </div>
      <div className={classes.button}>
        <Button
          onClick={challengeCompletedHandler}
          disabled={dwtChallengeCompleted}
        >
          {buttonMessage}
        </Button>
      </div>
    </Card>
  );
};

export default DailyChallengeCard;
