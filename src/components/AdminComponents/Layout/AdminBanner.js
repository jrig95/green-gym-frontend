import { BsSearch } from "react-icons/bs";

import AddUserToProgram from "../Members/AddUserToProgram";
import Button from "../../UI/Button";
import classes from "./AdminBanner.module.css";
import { useState } from "react";
import AddLibraryItem from "../Library/AddLibraryItem";

const AdminBanner = ({ programs, members, rewards, searchBar, library }) => {
  const [addUserToProgramIsShown, setAddUserToProgramIsShown] = useState(false);
  const [addLibraryItemIsShown, setAddLibraryItemIsShown] = useState(false);

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
      {rewards && <Button color="blue">Add Reward</Button>}
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
