import { BsSearch } from "react-icons/bs";

import AddUserToProgram from "../Members/AddUserToProgram";
import Button from "../../UI/Button";
import classes from "./AdminBanner.module.css";
import { useState } from "react";
import AddLibraryItem from "../Library/AddLibraryItem";
import AddReward from "../../Reward/AddReward";

const AdminBanner = ({ programs, members, rewards, searchBar, library }) => {
  const [addUserToProgramIsShown, setAddUserToProgramIsShown] = useState(false);
  const [addLibraryItemIsShown, setAddLibraryItemIsShown] = useState(false);
  const [addRewardIsShown, setAddRewardIsShown] = useState(false);

  const searchSubmitHandler = (event) => {
    event.preventDefault();
  };

  const showAddUserToProgramHandler = () => {
    setAddUserToProgramIsShown(true);
  };

  const hideAddUserToProgramHandler = () => {
    setAddUserToProgramIsShown(false);
  };

  const showAddLibraryItemHandler = () => {
    setAddLibraryItemIsShown(true);
  };

  const hideAddLibraryItemHandler = () => {
    setAddLibraryItemIsShown(false);
  };

  const showAddRewardHandler = () => {
    setAddRewardIsShown(true);
  };

  const hideAddRewardHandler = () => {
    setAddRewardIsShown(false);
  };

  return (
    <div className={classes.banner}>
      {addLibraryItemIsShown && <AddLibraryItem onClose={hideAddLibraryItemHandler}/>}
      {addUserToProgramIsShown && (
        <AddUserToProgram onClose={hideAddUserToProgramHandler} />
      )}
      {members && (
        <Button color="blue" onClick={showAddUserToProgramHandler}>
          Add User(s) to Program
        </Button>
      )}
      {programs && <Button color="blue">Add Program</Button>}
      {library && (
        <Button color="blue" onClick={showAddLibraryItemHandler}>
          Add Library Item
        </Button>
      )}
      {addRewardIsShown && <AddReward onClose={hideAddRewardHandler}/>}
      {rewards && <Button color="blue" onClick={showAddRewardHandler}>Add Reward</Button>}
      {searchBar && (
        <div className={classes.inputContainer}>
          <form onSubmit={searchSubmitHandler}>
            <BsSearch />
            <input type="text" />
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminBanner;
