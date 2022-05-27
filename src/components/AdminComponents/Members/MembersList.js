import { Fragment } from "react";
import Member from "./Member";
import classes from "./MembersList.module.css";

const MembersList = ({ members }) => {

  const membersList = members.map((member) => {
    return <Member key={member.id} member={member} id={member.id}/>
  })

  return (
    <Fragment>
     {membersList}
    </Fragment>
  );
};

export default MembersList;
