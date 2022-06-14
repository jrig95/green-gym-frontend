import { Fragment } from "react";

import Banner from "../../components/Layout/Banner";
import classes from "./PurchasePage.module.css";
import Monica from '../../assets/monicaQr.jpg'
import Darren from '../../assets/darrenQr.jpg'



const PurchasePage = () => {
  return (
    <Fragment>
      <Banner title="Purchase" />
      <div className={classes.container}>
        <div>
        <h1>Purchase</h1>
        </div>
        <div className={classes.qr}>
        <div className={classes.info}>
          <img src={Monica} alt="Monica Qr Code" />
          <p>Phone Number: +86-138-1622-6626</p>
        </div>
        <div className={classes.info}>
          <img src={Darren} alt="Darren Qr Code" />
          <p>Phone Number: +86-185-2141-9237</p>
        </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PurchasePage;
