import Card from "../UI/Card";
import classes from "./FormCard.module.css";

const FormCard = ({ children, title, body }) => {
  return (
    <Card className={classes.card}>
      <h1 className={classes.title}>{title || "title"}</h1>
      {body && <h2 className={classes.body}>{body}</h2>}
      {children}
    </Card>
  );
};

export default FormCard;
