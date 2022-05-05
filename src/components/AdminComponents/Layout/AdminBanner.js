import { BsSearch } from "react-icons/bs";

import Button from "../../UI/Button";
import classes from "./AdminBanner.module.css";

const AdminBanner = ({ title }) => {
  const searchBar = true;

  const searchSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.banner}>
      <Button color="blue">Add User(s) to Program</Button>
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
