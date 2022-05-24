import Card from "../UI/Card";
import classes from "./SignUpFormCard.module.css";

const SignUpFormCard = ({ children, title, body }) => {
  return (
    <Card className={classes.card}>
      <h1 className={classes.title}>{title || "title"}</h1>
      {body && <h2 className={classes.body}>{body}</h2>}
      {children}
    </Card>
  );
};

export default SignUpFormCard;
