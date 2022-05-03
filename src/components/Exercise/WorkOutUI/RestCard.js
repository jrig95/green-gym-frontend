import classes from "./RestCard.module.css";
import { useEffect, useState } from "react";

const RestCard = ({ timer }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  if (remainingTime >= 0) {
    return (
      <div className={classes.container}>
        <h2>Rest</h2>
        <h1>{remainingTime}</h1>
        <h2>seconds</h2>
      </div>
    );
  } else {
    return (
      <div className={classes.container}>
        <h2>Rest</h2>
        <h1>{0}</h1>
        <h2>seconds</h2>
        <p></p>
      </div>
    );
  }
};

export default RestCard;
