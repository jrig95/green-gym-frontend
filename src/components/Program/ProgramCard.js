import classes from "./ProgramCard.module.css";
import Card from "../UI/Card";

const ProgramCard = ({title, image, description}) => {
  return (
    <Card className={classes.card}>
      <h1 className={classes.title}>{title}</h1>
      <img
        src={image}
        alt={title}
      />
      <h3 className={classes.description}>{description}</h3>
    </Card>
  );
};

export default ProgramCard;
