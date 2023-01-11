import { Fragment, useEffect, useState } from "react";
import Member from "./Member";
import { useSelectedStore } from "../../../context/useSelectedStore";

const MembersList = ({
  members,
  programId,
  fetchAddMembersList,
  searchParam,
}) => {
  // Create an array of members that have been selected - useState
  const setSelectedMembers = useSelectedStore((state) => state.setSelectedMembers);

  // if a member is selected. Add that member to the array.
  // if a member is deselected. Remove that member from the array.
  // Should be an array of objects.
  // each object should contain the members id

  const addMemberIdToArrayHandler = (newMember) => {
    setSelectedMembers(newMember);
  };


  const membersList = members
    ?.filter(
      (element) =>
        element.programs.some((program) =>
          program?.program_title
            ?.toLowerCase()
            .includes(searchParam ? searchParam : "")
        ) ||
        element?.first_name?.includes(searchParam ? searchParam : "") ||
        element?.last_name?.includes(searchParam ? searchParam : "")
    )
    ?.map((member) => {
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
