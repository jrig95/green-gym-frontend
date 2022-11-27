import classes from "./CarouselCard.module.css";
import Card from "./Card";

const CarouselCard = ({ image, title, body, bodyTwo }) => {
  return (
    <Card className={classes.container}>
      <div className={classes.imageAndTextContainer}>
        <img
          src={image}
          alt={title}
        />
        <div className={classes.text}>
          <h1 className={classes.title}>{title}</h1>
          <h3 className={classes.body}>{body}</h3>
          <h3 className={classes.body}>{bodyTwo}</h3>
        </div>
      </div>
    </Card>
  );
};

export default CarouselCard;
