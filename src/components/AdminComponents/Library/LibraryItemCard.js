import { Link } from "react-router-dom";
import { BsFillGearFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

import Card from "../../UI/Card";
import classes from "./LibraryItemCard.module.css";

const LibraryItemCard = ({ title, videoUrl, onDelete }) => {
  return (
    <Card className={classes.card}>
      <Link to="/">
        <h3 className={classes.title}>{title}</h3>
      </Link>
      <div className={classes.icons}>
        <div className={classes.iconGear}>
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
