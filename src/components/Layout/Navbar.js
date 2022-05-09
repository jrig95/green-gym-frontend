import classes from "./Navbar.module.css";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useTranslation } from "react-i18next";


const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <h1>Green Gym</h1>
      <div className={classes.linksContainer}>
        <div className={classes.links}>
          <h2>{t("nav_bar_programs")}</h2>
          <h2>{t("nav_bar_my_activites")}</h2>
          <h2>{t("nav_bar_rewards")}</h2>
          <h2>{t("nav_bar_profile")}</h2>
        </div>
        <LanguageToggle/>
      </div>
    </div>
  );
};

export default Navbar;