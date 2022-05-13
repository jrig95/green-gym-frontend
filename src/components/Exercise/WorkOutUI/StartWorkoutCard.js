import { AiFillPlayCircle } from "react-icons/ai";
import { useState, useEffect, Fragment } from "react";

import classes from "./StartWorkoutCard.module.css";
import Card from "../../UI/Card";

const StartWorkoutCard = ({ onStartWorkout }) => {
  const [isGettingReady, setIsGettingReady] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const onStartCountdownHandler = () => {
    setIsGettingReady(true);
  };

  // useEffect(() => {
  //   if (isGettingReady) {
  //     const intervalId = setInterval(() => {
  //       setCountdown((prevTime) => prevTime - 1);
  //     }, 1000);
  //     return () => clearInterval(intervalId);
  //   }
  // }, [isGettingReady]);

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
  }, [isGettingReady, countdown]);

  return (
    <Fragment>
      {isGettingReady && (
        <Card className={classes.container}>
          <h1>Get Ready!</h1>
          <h2>{countdown}</h2>
        </Card>
      )}
      {!isGettingReady && (
        <Card className={classes.container} onClick={onStartCountdownHandler}>
          <h1>Start Workout</h1>
          <AiFillPlayCircle />
        </Card>
      )}
    </Fragment>
  );
};

export default StartWorkoutCard;
