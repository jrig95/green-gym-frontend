import classes from "./LandingPage.module.css";
import Card from "../../components/UI/Card";
import Footer from "../../components/Layout/Footer";
import { useTranslation } from "react-i18next";
import CarouselMain from "../../components/UI/CarouselMain";
import CarouselCard from "../../components/UI/CarouselCard";

const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <h1 className={classes.mainTitle}>{t("main_title")}</h1>
        <h1 className={classes.subTitle}>{t("sub_title")}</h1>
      </div>
      {/* <CarouselCard/> */}
      <CarouselMain />
    </div>
  );
};

export default LandingPage;
