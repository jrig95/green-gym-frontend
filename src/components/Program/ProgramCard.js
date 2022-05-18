import { slugify } from "../../utils/slugify";
import { Link } from "react-router-dom";
import { BsFillGearFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

import classes from "./ProgramCard.module.css";
import Card from "../UI/Card";

const ProgramCard = ({ id, title, image, description, onDelete, admin }) => {
  const slug = slugify(`${title}-${id}`);

  const titleLength = title.length;

  let responsiveFontSize;

  if (titleLength <= 20) {
    responsiveFontSize = "1.5rem";
  }

  if (titleLength > 20 && titleLength <= 30) {
    responsiveFontSize = "1.2rem";
  }

  if (titleLength > 30) {
    responsiveFontSize = "1rem";
  }

  return (
    <Card className={classes.card}>
      {admin && (
        <div className={classes.icons}>
          <div className={classes.iconGear}>
            <BsFillGearFill />
          </div>
          <div className={classes.iconBin} onClick={onDelete}>
            <AiFillDelete />
          </div>
        </div>
      )}
      <Link to={`/programs/${slug}`} state={id}>
        <div className={classes.title}>
          <h1
            style={{
              fontSize: responsiveFontSize,
            }}
          >
            {title}
          </h1>
        </div>
        <img src={image} alt={title} />
        <h3 className={classes.description}>{description}</h3>
      </Link>
    </Card>
  );
};

export default ProgramCard;
