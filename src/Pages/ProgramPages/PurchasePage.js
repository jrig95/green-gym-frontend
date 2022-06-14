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
        <div>
          <img src={Monica} alt="Monica Qr Code" />
        </div>
        <div>
          <img src={Darren} alt="Darren Qr Code" />
        </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PurchasePage;
