import classes from "./DailyChallengeCard.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { GiBiceps } from "react-icons/gi";

const DailyChallengeCard = () => {
  return (
    <Card className={classes.container}>
      <div className={classes.title}>
        <h1>Daily Challenge</h1>
      </div>
      <div className={classes.description}>
        <p>Daily challenge description.</p>
      </div>
      <div className={classes.icon}>
        <GiBiceps />
      </div>
      <div className={classes.button}>
        <Button>Do it</Button>
      </div>
    </Card>
  );
};

export default DailyChallengeCard;
