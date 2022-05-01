import classes from "./DailyChallengeCard.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { GiBiceps } from "react-icons/gi";

const DailyChallengeCard = () => {
  return (
    <Card className={classes.container}>
      <h1>Daily Challenge</h1>
      <p>Daily challenge description.</p>
      <div className={classes.buttonContainer}>
        <GiBiceps />
        <Button>Do it</Button>
      </div>
    </Card>
  );
};

export default DailyChallengeCard;
