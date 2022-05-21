import ReactPlayer from "react-player";
import { BsFillGearFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

import Card from "../../UI/Card";
import classes from "./LibraryItemCard.module.css";

const LibraryItemCard = ({ title, videoUrl, onDelete }) => {
  return (
    <Card className={classes.card}>
      <h3 className={classes.title}>{title}</h3>
      <div className={classes.icons}>
        <div className={classes.iconGear}>
          <BsFillGearFill />
        </div>
        <div className={classes.iconBin} onClick={onDelete}>
          <AiFillDelete />
        </div>
      </div>
      {/* <ReactPlayer playing={false} width={344} height={200} url={videoUrl} /> */}
    </Card>
  );
};

export default LibraryItemCard;
