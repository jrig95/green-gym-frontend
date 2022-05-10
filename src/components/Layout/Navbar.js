import { NavLink, Link } from "react-router-dom";

import classes from "./Navbar.module.css";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  const isActive = ({ isActive }) => (isActive ? activeStyle : undefined);

  const userLoggedIn = false;
  const adminLoggedIn = true;

  const activeStyle = {
    color: "#55ca8a",
  };

  return (
    <div className={classes.container}>
      <Link to="/">
        <h1>Green Gym</h1>
      </Link>
      <h2 className={classes.admin}>Admin</h2>
      <div className={classes.linksContainer}>
        {adminLoggedIn && (
          <div className={classes.links}>
            <NavLink style={isActive} to="members">
              {t("nav_bar_members")}
            </NavLink>
            <NavLink style={isActive} to="library">
              {t("nav_bar_programs")}
            </NavLink>
            <NavLink style={isActive} to="programs">
              {t("nav_bar_programs")}
            </NavLink>
            <NavLink style={isActive} to="rewards">
              {t("nav_bar_rewards")}
            </NavLink>
          </div>
        )}
        {userLoggedIn && (
          <div className={classes.links}>
            <NavLink style={isActive} to="programs">
              {t("nav_bar_programs")}
            </NavLink>
            <NavLink style={isActive} to="activities">
              {t("nav_bar_my_activites")}
            </NavLink>
            <NavLink style={isActive} to="rewards">
              {t("nav_bar_rewards")}
            </NavLink>
            <NavLink style={isActive} to="profile">
              {t("nav_bar_profile")}
            </NavLink>
          </div>
        )}
        <LanguageToggle />
      </div>
    </div>
  );
};

export default Navbar;
