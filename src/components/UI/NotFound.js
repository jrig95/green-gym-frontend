import Card from "./Card";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <h1>404</h1>
        <h2>page not found</h2>
      </Card>
    </div>
  );
};

export default NotFound;
