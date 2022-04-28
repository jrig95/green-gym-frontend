import classes from "./LandingPage.module.css";
import Card from "../../components/UI/Card";
import Footer from "../../components/Layout/Footer";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <h1 className={classes.mainTitle}>{t("main_title")}</h1>
        <h1 className={classes.subTitle}>{t("sub_title")}</h1>
      </div>
    </div>
  );
};

export default LandingPage;
