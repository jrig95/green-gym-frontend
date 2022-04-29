import classes from "./LandingPage.module.css";
import { useTranslation } from "react-i18next";
import Background from '../../components/Layout/Background';
import CarouselMain from "../../components/UI/CarouselMain";
import Button from '../../components/UI/Button'

const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <Background>
      <div className={classes.container}>
        <h1 className={classes.mainTitle}>{t("main_title")}</h1>
        <h1 className={classes.subTitle}>{t("sub_title")}</h1>
        <CarouselMain />
        <div className={classes.buttonsContainer}>
          <Button color="white">Find Out More</Button>
          <Button>Join Green Gym</Button>
        </div>
      </div>
    </Background>
  );
};

export default LandingPage;
