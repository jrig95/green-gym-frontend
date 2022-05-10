import { Link } from "react-router-dom";
import { useState } from "react";
import { BsCheckSquare } from "react-icons/bs";
import { BsSquare } from "react-icons/bs";

import Card from "../../UI/Card";
import classes from "./Member.module.css";

const Member = () => {
  const [memberIsSelected, setMemberIsSelected] = useState(false);

  const selectMemberHandler = () => {
    setMemberIsSelected((prevState) => !prevState);
  };

  const memberClasses = memberIsSelected
    ? `${classes.card} ${classes.cardIsSelected}`
    : classes.card;

  return (
    <Card className={memberClasses}>
      <Link to="1">
        <div className={classes.linkContainer}>
          <p>
            First Name: <b>Darren</b>
          </p>
          <p>
            Last Name: <b>Lewis</b>
          </p>
          <p>
            Company: <b>Green Gym</b>
          </p>
          <p>
            E-Mail: <b>darren@lewis.com</b>
          </p>
        </div>
      </Link>
      <div className={classes.checkBox} onClick={selectMemberHandler}>
        {memberIsSelected ? <BsCheckSquare /> : <BsSquare />}
      </div>
    </Card>
  );
};

export default Member;
