import { AiFillPlayCircle } from "react-icons/ai";
import { useState, useEffect, Fragment } from "react";

import classes from "./StartWorkoutCard.module.css";
import Card from "../../UI/Card";
import { useTranslation } from "react-i18next";


const StartWorkoutCard = ({ onStartWorkout }) => {
  const { t } = useTranslation();
  const [isGettingReady, setIsGettingReady] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const onStartCountdownHandler = () => {
    setIsGettingReady(true);
  };

  useEffect(() => {
    if (countdown > 0 && isGettingReady) {
      const timer = setInterval(
        () => setCountdown((prevValue) => prevValue - 1),
        1000
      );
      return () => clearInterval(timer);
    }

    if (countdown === 0) {
      onStartWorkout();
    }
  }, [isGettingReady, countdown, onStartWorkout]);

  return (
    <Fragment>
      {isGettingReady && (
        <Card className={classes.container}>
          <h1>{t("start_workout_card_get_ready")}</h1>
          <h2>{countdown}</h2>
        </Card>
      )}
      {!isGettingReady && (
        <Card className={classes.container} onClick={onStartCountdownHandler}>
          <h1>{t("start_workout_card_start_workout")}</h1>
          <AiFillPlayCircle />
        </Card>
      )}
    </Fragment>
  );
};

export default StartWorkoutCard;
