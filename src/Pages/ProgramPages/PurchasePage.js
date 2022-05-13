import { Fragment } from "react";

import Banner from "../../components/Layout/Banner";
import classes from "./PurchasePage.module.css";

const PurchasePage = () => {
  return (
    <Fragment>
      <Banner title="Purchase" />
      <div className={classes.container}>
        <h1>Purchase</h1>
      </div>
    </Fragment>
  );
};

export default PurchasePage;
