import { Link } from "react-router-dom";
import { BsFillGearFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import Card from "../../UI/Card";
import classes from "./LibraryItemCard.module.css";

const LibraryItemCard = ({ id, title, onDelete, onUpdate, videoUrl }) => {
  const url = `/library/${id}`;
  const startURL = videoUrl + "#t=1";

  return (
    <Card className={classes.card}>
      <Link to={url}>
        <div style={{ display: "grid", placeContent: "center" }}>
          <video src={startURL} width="100%" height="100%"></video>
        </div>
        <h3 className={classes.title}>{title}</h3>
      </Link>
      <div className={classes.icons}>
        <div className={classes.iconGear} onClick={onUpdate}>
          <BsFillGearFill />
        </div>
        <div className={classes.iconBin} onClick={onDelete}>
          <AiFillDelete />
        </div>
      </div>
    </Card>
  );
};

export default LibraryItemCard;
