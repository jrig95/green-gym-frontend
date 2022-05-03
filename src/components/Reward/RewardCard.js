import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./RewardCard.module.css";

const RewardCard = ({ title, points, image }) => {
  const stringifiedPoints = parseInt(points).toLocaleString("en-US");

  return (
    <Card className={classes.card}>
      <div className={classes.textContainer}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.points}><b>Cost:</b> {stringifiedPoints} pts</p>
        <Button size="small">Redeem</Button>
      </div>
      <div className={classes.imageContainer}>
        <img src={image} alt="picture" />
      </div>
    </Card>
  );
};

export default RewardCard;
