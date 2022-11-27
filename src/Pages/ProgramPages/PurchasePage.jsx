import { Fragment } from "react";

import Banner from "../../components/Layout/Banner";
import classes from "./PurchasePage.module.css";
import Monica from '../../assets/monicaQr.jpg'
import Darren from '../../assets/darrenQr.jpg'
import { useTranslation } from "react-i18next";


const PurchasePage = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Banner title={t("purchase_page_purchase")}/>
      <div className={classes.container}>
        <div>
          <h1>{t("purchase_page_purchase")}</h1>
        </div>
        <div className={classes.qr}>
        <div className={classes.info}>
          <img src={Monica} alt="Monica Qr Code" />
            <p>{t("purchase_page_phone_number")} +86-138-1622-6626</p>
        </div>
        <div className={classes.info}>
          <img src={Darren} alt="Darren Qr Code" />
          <p>{t("purchase_page_phone_number")} +86-185-2141-9237</p>
        </div>
        {/* <div className={classes.info}>
          <img src={GreenGym} alt="Official Account" />
          <p>Wechat Official Account</p>
        </div> */}
        </div>
      </div>
    </Fragment>
  );
};

export default PurchasePage;
