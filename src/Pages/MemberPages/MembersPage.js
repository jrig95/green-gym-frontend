import { Fragment, useEffect, useState } from "react";

import { useAddMemeberToProgram } from "../../components/AdminComponents/Members/hooks/use-add-memeber-to-program";
import AddedMembersToProgramMessage from "../../components/AdminComponents/Members/AddedMembersToProgramMessage";
import NoMembersWarning from "../../components/AdminComponents/Members/NoMembersWarning";
import LoadingSpinnerLarge from "../../components/UI/LoadingSpinnerLarge";
import { useGetMembers } from "../../components/AdminComponents/Members/hooks/use-members";
import MembersList from "../../components/AdminComponents/Members/MembersList";
import classes from "./MembersPage.module.css";
import AdminBanner from "../../components/AdminComponents/Layout/AdminBanner";
import Sort from "../../components/AdminComponents/Members/Sort";

const MembersPage = () => {
  const addMemberToProgram = useAddMemeberToProgram();
  const [
    addMemebersToProgramMessageIsShown,
    setAddMemberToProgramMessageIsShown,
  ] = useState(false);
  const [noMembersIsShown, setNoMembersIsShown] = useState(false);
  const [searchParam, setSearchParam] = useState("");
  const [programId, setProgramId] = useState(null);
  const [addMemebersList, setAddMembersList] = useState([]);

  const getSearchParamHandler = (data) => {
    setSearchParam(data);
  };

  const getAddUserProgramId = (data) => {
    setProgramId(data);
  };

  const fetchAddMembersListHandler = (data) => {
    setAddMembersList(data);
  };

  const hideNoMembersWarningHandler = () => {
    setNoMembersIsShown(false);
  };

  const hideAddMembersToProgramMessageHandler = () => {
    setAddMemberToProgramMessageIsShown(false);
  };

  // Write a warning modal that fires if admin has not added users.
  // write a confrimation modal that shows list of users that have been added to the program.
  // Get a list of user names and program name.

  useEffect(() => {
    if (programId != null) {
      if (addMemebersList.length !== 0) {
        addMemebersList.forEach((member) => {
          // const formData = new FormData();

          // formData.append("program_tracker[user_id]", member.id)
          // formData.append("program_tracker[program_id]", programId)

          const program_tracker = {
            user_id: member.id,
            program_id: programId
          }

          addMemberToProgram(program_tracker)
        })

        setAddMemberToProgramMessageIsShown(true);
        setProgramId(null);
      } else {
        setNoMembersIsShown(true);
        setProgramId(null);
      }
    }
  }, [addMemebersList, programId]);

  // Create another modal that shows on success. Show have a list of users and Program name.
  // pass the programId via props and call backend for program details
  // list of memebers should include full names.

  // Write add members to program handler
  // On click of add button retreive the members array from the MembersList component

  // create hook to get all members
  const {
    data: membersData,
    isLoading,
    refetch: refetchMembers,
  } = useGetMembers(searchParam);

  useEffect(() => {
    refetchMembers();
  }, [searchParam]);

  // render loading
  if (isLoading) return <LoadingSpinnerLarge />;

  return (
    <Fragment>
      <AdminBanner
        members={true}
        searchBar={true}
        searchParam={getSearchParamHandler}
        addUserProgramId={getAddUserProgramId}
      />
      <div className={classes.container}>
        {noMembersIsShown && (
          <NoMembersWarning onClose={hideNoMembersWarningHandler} />
        )}
        {addMemebersToProgramMessageIsShown && (
          <AddedMembersToProgramMessage
            onClose={hideAddMembersToProgramMessageHandler}
            memebers={addMemebersList}
            programId={programId}
          />
        )}
        {/* <Sort /> */}
        <MembersList
          members={membersData}
          programId={programId}
          fetchAddMembersList={fetchAddMembersListHandler}
        />
      </div>
    </Fragment>
  );
};

export default MembersPage;
