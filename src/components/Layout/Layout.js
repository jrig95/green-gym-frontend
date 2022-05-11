import { Fragment } from "react";

import Navbar from "./Navbar";
import classes from "./Layout.module.css";
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
        <main className={classes.container}>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
