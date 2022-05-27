import { Link } from "react-router-dom";
import classes from "./NoProgram.module.css";
import Button from "../UI/Button";
import { Fragment } from "react";

const NoProgram = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <h1 className={classes.header}>
          It looks like you don't have a program.
        </h1>
        <h2 className={classes.subheader}>Click the button to get started</h2>
        <Link to="/programs">
          <Button>Select A Program</Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default NoProgram;
