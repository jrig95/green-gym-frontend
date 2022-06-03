import { Link } from "react-router-dom";
import { useState } from "react";
import { BsCheckSquare } from "react-icons/bs";
import { BsSquare } from "react-icons/bs";

import { createFullName } from "../../../utils/create-full-name";
import { slugify } from "./../../../utils/slugify";
import Card from "../../UI/Card";
import classes from "./Member.module.css";

const Member = ({ member, getMemberId  }) => {
  const [memberIsSelected, setMemberIsSelected] = useState(false);

  const selectMemberHandler = () => {
    setMemberIsSelected((prevState) => !prevState);
    const memeber = { id: member.id}
    getMemberId(memeber)
  };



  const memberClasses = memberIsSelected
    ? `${classes.card} ${classes.cardIsSelected}`
    : classes.card;

  // TODO: Create a slug from first name and id
  const fullName = createFullName(member.first_name, member.last_name);
  const slug = `${slugify(fullName)}-${member.id}`;
  
  return (
    <Card className={memberClasses}>
      <Link to={`${slug}`}>
        <div className={classes.linkContainer}>
          <p>
            First Name: <b>{member.first_name}</b>
          </p>
          <p>
            Last Name: <b>{member.last_name}</b>
          </p>
          <p>
            Company: <b>{member.user_company}</b>
          </p>
          <p>
            E-Mail: <b>{member.email}</b>
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
