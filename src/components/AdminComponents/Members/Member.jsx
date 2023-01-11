import { Link } from "react-router-dom";
import { useState } from "react";
import { BsCheckSquare } from "react-icons/bs";
import { BsSquare } from "react-icons/bs";

import { createFullName } from "../../../utils/create-full-name";
import { slugify } from "./../../../utils/slugify";
import Card from "../../UI/Card";
import classes from "./Member.module.css";
import { useSelectedStore } from "../../../context/useSelectedStore";

const Member = ({ member }) => {
  const [memberIsSelected, setMemberIsSelected] = useState(false);
  const setSelectedMembers = useSelectedStore((state) => state.setSelectedMembers);
  const selectedMembers = useSelectedStore((state) => state.selectedMembers);

  const fullName = createFullName(member.first_name, member.last_name);
  const slug = `${slugify(fullName)}-${member.id}`;

  const selectMemberHandler = () => {
    if(memberIsSelected) {
      selectedMembers.delete(member);
    }
    else {
      setSelectedMembers(member);
    }
    setMemberIsSelected((prevState) => !prevState);
  };

  const memberClasses = memberIsSelected
    ? `${classes.card} ${classes.cardIsSelected}`
    : classes.card;

  // TODO: Create a slug from first name and id

  return (
    <Card className={memberClasses}>
      <Link to={`${slug}`}>
        <div className={classes.linkContainer}>
          <div className={classes.column}>
          <p >
            First Name:
          </p>
          <p><b>{member.first_name}</b></p>
          </div>
          <div className={classes.column}>
          <p className={classes.last_name}>
            Last Name:
          </p>
          <p className={classes.last_name}><b>{member.last_name}</b></p>
          </div>
          <div className={classes.column}>
          <p>
            Company:
          </p>
          <p><b>{member.user_company}</b></p>
          </div>
          <div className={classes.column}>
          <p className={classes.number}>
            Phone Number:
          </p>
          <p className={classes.number}><b>{member.phone_number}</b></p>
          </div>
          <div className={classes.column}>
          <p className={classes.email}>
            E-Mail:
          </p>
          <p className={classes.email}><b>{member.email}</b></p>
          </div>
        </div>
      </Link>
      <div className={classes.checkBox} onClick={selectMemberHandler}>
        {memberIsSelected ? <BsCheckSquare /> : <BsSquare />}
      </div>
    </Card>
  );
};

export default Member;
