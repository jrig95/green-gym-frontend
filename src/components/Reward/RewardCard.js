import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./RewardCard.module.css";
import { BsFillGearFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const RewardCard = ({
  admin,
  title,
  points,
  image,
  onClaimReward,
  onDelete,
  onUpdate,
}) => {
  const stringifiedPoints = parseInt(points).toLocaleString("en-US");

  return (
    <Card className={classes.card}>
      <div className={classes.textContainer}>
        {admin && (
          <div className={classes.icons}>
            <div className={classes.iconGear} onClick={onUpdate}>
              <BsFillGearFill />
            </div>
            <div className={classes.iconBin} onClick={onDelete}>
              <AiFillDelete />
            </div>
          </div>
        )}

        <h3 className={classes.title}>{title}</h3>
        <p className={classes.points}>
          <b>Cost:</b> {stringifiedPoints} pts
        </p>
        <Button onClick={onClaimReward} size="small">
          Redeem
        </Button>
      </div>
      <div className={classes.imageContainer}>
        <img src={image} alt={title} />
      </div>
    </Card>
  );
};

export default RewardCard;
