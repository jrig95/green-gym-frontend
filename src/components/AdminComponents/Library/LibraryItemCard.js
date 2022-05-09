import Card from "../../UI/Card";
import classes from "./LibraryItemCard.module.css";

const LibraryItemCard = () => {
  return <Card className={classes.card}>
    <h1 className={classes.title}>Title</h1>
  </Card>;
};

export default LibraryItemCard;
