import { Fragment, useEffect, useState } from "react";
import Member from "./Member";

const MembersList = ({ members, programId, fetchAddMembersList }) => {
  // Create an array of members that have been selected - useState
  const [memberArray, setMemberArray] = useState([]);
  // if a member is selected. Add that member to the array.
  // if a member is deselected. Remove that member from the array.
  // Should be an array of objects.
  // each object should contain the members id

  const addMemberIdToArrayHandler = (newMember) => {
    // Check to see if members id already exsists in the array
    const memberInArray = memberArray.find(
      (existingMemeber) => existingMemeber.id === newMember.id
    );

    // Set condition to check memberInArray is defined
    if (memberInArray === undefined) {
      // Add user to the array
      setMemberArray((prevMembers) => [...prevMembers, newMember]);
    } else {
      // Remove user from the array.
      setMemberArray((prevMembers) =>
        prevMembers.filter((oldMember) => oldMember.id !== newMember.id)
      );
    }
  };

  useEffect(() => {
    fetchAddMembersList(memberArray);
  }, [memberArray, fetchAddMembersList]);

  const membersList = members.map((member) => {
    return (
      <Member
        key={member.id}
        member={member}
        id={member.id}
        getMemberId={addMemberIdToArrayHandler}
      />
    );
  });

  return <Fragment>{membersList}</Fragment>;
};

export default MembersList;
