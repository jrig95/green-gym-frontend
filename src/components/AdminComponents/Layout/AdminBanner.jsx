import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

import { textNotEmpty } from "../../../utils/input-from-validations";
import useInput from "../../Forms/Hooks/use-input";
import AddUserToProgram from "../Members/AddUserToProgram";
import Button from "../../UI/Button";
import classes from "./AdminBanner.module.css";
import { useState } from "react";
import AddLibraryItem from "../Library/AddLibraryItem";
import AddReward from "../../Reward/AddReward";

const AdminBanner = ({
  programs,
  members,
  rewards,
  searchBar,
  library,
  searchParam,
  addUserProgramId,
}) => {
  const [addUserToProgramIsShown, setAddUserToProgramIsShown] = useState(false);
  const [addLibraryItemIsShown, setAddLibraryItemIsShown] = useState(false);
  const [addRewardIsShown, setAddRewardIsShown] = useState(false);

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    searchParam(searchValue);
    // resetSearch();   keep search value in input
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

  const {
    value: searchValue,
    valueChangeHandler: searchChangeHandler,
    reset: resetSearch,
  } = useInput(textNotEmpty);

  // array to csv function
  const arrayToCSV = (array) => {
    const fileds = Object.keys(array[0]);
    const replacer = (key, value) => (value === null ? "" : value);
    const dataPart = array.map((row) =>
      fileds
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(",")
    );
    const csv = [fileds.join(","), ...dataPart].join("\n");
    return csv;
  };
  const generateDownloadLink = (csvData) => {
    const fileType = "text/csv;charset=utf-8;";
    const data = new Blob([csvData], { type: fileType });
    const url = window.URL.createObjectURL(data);
    return url;
  };
  const handleExport = (e) => {
    const button = e.target;
    const csvData = arrayToCSV(members);
    const url = generateDownloadLink(csvData);
    button.setAttribute("href", url);
    button.setAttribute("download", "members.csv");
  };

  return (
    <div className={classes.banner}>
      {addLibraryItemIsShown && (
        <AddLibraryItem onClose={hideAddLibraryItemHandler} />
      )}
      {addUserToProgramIsShown && (
        <AddUserToProgram
          onClose={hideAddUserToProgramHandler}
          getProgramId={(programId) => addUserProgramId(programId)}
        />
      )}
      {members && (
        <>
          <Button
            color="blue"
            size="small"
            onClick={showAddUserToProgramHandler}
          >
            Assign to program
          </Button>
          <Button color="blue" size="small">
            <a href="#" onClick={handleExport}>
              Export users
            </a>
          </Button>
        </>
      )}
      {programs && (
        <Link to="add-program">
          <Button color="blue" size="small">
            Add Program
          </Button>
        </Link>
      )}
      {library && (
        <Button color="blue" onClick={showAddLibraryItemHandler} size="small">
          Add Library Item
        </Button>
      )}
      {addRewardIsShown && <AddReward onClose={hideAddRewardHandler} />}
      {rewards && (
        <Button color="blue" onClick={showAddRewardHandler}>
          Add Reward
        </Button>
      )}
      {searchBar && (
        <div className={classes.inputContainer}>
          <form onSubmit={searchSubmitHandler}>
            <BsSearch />
            <input
              type="text"
              value={searchValue}
              onChange={searchChangeHandler}
            />
          </form>
          <Button
            className={classes.searchSubmitButton}
            onClick={searchSubmitHandler}
            size="small"
            color="blue"
          >
            search
          </Button>
        </div>
      )}
    </div>
  );
};

export default AdminBanner;
