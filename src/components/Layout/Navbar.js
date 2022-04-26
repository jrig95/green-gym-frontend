import classes from "./Navbar.module.css";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useTranslation } from "react-i18next";


const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <h1>Green Gym</h1>
      <div className={classes.linksContainer}>
        <h3>{t("welcome_to_green_gym")}</h3>
        <LanguageToggle/>
      </div>
    </div>
  );
};

export default Navbar;