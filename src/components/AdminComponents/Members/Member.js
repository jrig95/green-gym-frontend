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
      <p>
        <b>First Name:</b> Darren
      </p>
      <p>
        <b>Last Name:</b> Lewis
      </p>
      <p>
        <b>Company:</b> Green Gym
      </p>
      <p>
        <b>E-Mail:</b> darren@lewis.com
      </p>
      <div onClick={selectMemberHandler}>{memberIsSelected ? <BsCheckSquare /> : <BsSquare />}</div>
    </Card>
  );
};

export default Member;
