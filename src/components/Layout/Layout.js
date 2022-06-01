import { Fragment } from "react";

import Navbar from "./Navbar";
import classes from "./Layout.module.css";
import Footer from "./Footer";
import LoadingSpinner from "../UI/LoadingSpinner";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <div className={classes.outerContainer}>
        {/* <div className={classes.loadingSpinnerContainer}>
          <div className={classes.loadingSpinner}>
            <LoadingSpinner />
          </div>
        </div> */}
      </div>
      <main className={classes.container}>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
