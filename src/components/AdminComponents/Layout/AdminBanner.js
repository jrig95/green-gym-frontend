import { BsSearch } from "react-icons/bs";

import AddUserToProgram from "../Members/AddUserToProgram";
import Button from "../../UI/Button";
import classes from "./AdminBanner.module.css";
import { useState } from "react";

const AdminBanner = ({ members, rewards }) => {
  const [addUserToProgramIsShown, setAddUserToProgramIsShown] = useState(false)
  const searchBar = true;

  const searchSubmitHandler = (event) => {
    event.preventDefault();
  };

  const showAddUserToProgramHandler = () => {
    setAddUserToProgramIsShown(true)
  };
  
  const hideAddUserToProgramHandler = () => {
    setAddUserToProgramIsShown(false)
  };

  return (
    <div className={classes.banner}>
      {addUserToProgramIsShown && <AddUserToProgram onClose={hideAddUserToProgramHandler}/>}
      {members && <Button color="blue" onClick={showAddUserToProgramHandler}>Add User(s) to Program</Button>}
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
