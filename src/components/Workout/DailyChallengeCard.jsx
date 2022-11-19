// import { useState } from "react";
import { GiBiceps } from "react-icons/gi";

import classes from "./DailyChallengeCard.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { useTranslation } from "react-i18next";


const DailyChallengeCard = ({ getCompleted, dwtChallengeCompleted, dailyChallenge }) => {
  const { t } = useTranslation();
  // const [challengeIsCompleted, setChallengeIsCompleted] = useState(false);

  const challengeCompletedHandler = () => {
    // setChallengeIsCompleted(true);
    getCompleted(true);
  };

  const iconClasses = dwtChallengeCompleted
    ? `${classes.icon} ${classes.checkedIn}`
    : classes.icon;

  const doneIt = t("daily_challenge_card_done_it")
  const doIt = t("daily_challenge_card_do_it")
  // const buttonMessage = dwtChallengeCompleted ? "Done it!" : "Do it!";
  const buttonMessage = dwtChallengeCompleted ? doneIt : doIt;



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
