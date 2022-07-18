import classes from "./ProgramPurchasePage.module.css";
import Banner from "../../components/Layout/Banner";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";


const ProgramPurchasePage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Banner title={t("program_purchase_page_purchase_program")} />
    </Fragment>
  );
};

export default ProgramPurchasePage;
