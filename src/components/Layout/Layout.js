import { Fragment } from "react";

import Navbar from "./Navbar";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main className={classes.container}>{children}</main>
    </Fragment>
  )
};

export default Layout;