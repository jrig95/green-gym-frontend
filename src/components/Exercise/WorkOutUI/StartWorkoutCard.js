import { AiFillPlayCircle } from "react-icons/ai";

import classes from "./StartWorkoutCard.module.css";
import Card from "../../UI/Card";
import { useState, useEffect } from "react";

const StartWorkoutCard = ({ onStartWorkout }) => {
  const [isGettingReady, setIsGettingReady] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const onStartCountdownHandler = () => {
    setIsGettingReady(true);
  };

  useEffect(() => {
    if (isGettingReady) {
      const intervalId = setInterval(() => {
        setCountdown((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isGettingReady]);

  if (countdown < 0) {
    onStartWorkout();
  }

  const startWorkoutMessage = (
    <Card className={classes.container} onClick={onStartCountdownHandler}>
      <h1>Start Workout</h1>
      <AiFillPlayCircle />
    </Card>
  );

  const getReadyCountDown = (
    <Card className={classes.container}>
      <h1>Get Ready!</h1>
      <h2>{countdown}</h2>
    </Card>
  );

  return (
    isGettingReady ? getReadyCountDown : startWorkoutMessage
  );
};

export default StartWorkoutCard;
