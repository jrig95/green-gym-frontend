import Card from "../UI/Card";
import classes from "./FormCard.module.css";

const FormCard = ({ children, title }) => {
  return (
    <Card className={classes.card}>
      <h1 className={classes.title}>{title || "title"}</h1>
      {children}
    </Card>
  );
};

export default FormCard;
