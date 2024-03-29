import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState, useContext } from "react";

import LoadingSpinner from "../UI/LoadingSpinner";
import { useUserLogout } from "../User/hooks/use-user-logout";
import AuthContext from "../../context/AuthContext";
import Button from "../UI/Button";
import classes from "./Navbar.module.css";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/logo.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const userLogout = useUserLogout();
  const authCtx = useContext(AuthContext);
  const { t } = useTranslation();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const logoutHandler = () => {
    // Call a logout function here.
    userLogout(authCtx.token);
    authCtx.logout();
    navigate("/");
  };

  const isActive = ({ isActive }) => (isActive ? activeStyle : undefined);

  const userLoggedIn = authCtx.isLoggedIn;
  const adminLoggedIn = authCtx.isAdmin;

  const loggedOut = !userLoggedIn && !adminLoggedIn;

  const activeStyle = {
    color: "#55ca8a",
  };

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src={Logo} alt="Green Gym Logo" />
      </div>
      <Link to="/">
        <div className={classes.logoContainer}>
          <h1>Green Gym</h1>
        </div>
      </Link>
      {adminLoggedIn && <h2 className={classes.admin}>Admin</h2>}
      <div className={classes.loadingSpinner}>
        <LoadingSpinner />
      </div>
      <div className={classes.linksContainer}>
        {loggedOut && (
          <div className={classes.links}>
            <Link to="login">{t("nav_bar_already_a_member")}</Link>
            <Link to="signup">
              <Button size="small">{t("nav_bar_create_a_profile")}</Button>
            </Link>
          </div>
        )}
        {adminLoggedIn && (
          <div className={classes.links}>
            <NavLink style={isActive} to="members">
              {t("nav_bar_members")}
            </NavLink>
            <NavLink style={isActive} to="library">
              {t("nav_bar_library")}
            </NavLink>
            <NavLink style={isActive} to="programs">
              {t("nav_bar_programs")}
            </NavLink>
            <NavLink style={isActive} to="rewards">
              {t("nav_bar_leaderboard")}
            </NavLink>
            <Button
              className={classes.logout}
              onClick={logoutHandler}
              size="small"
            >
              {t("nav_bar_logout")}
            </Button>
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
              {t("nav_bar_leaderboard")}
            </NavLink>
            <NavLink style={isActive} to="profile">
              {t("nav_bar_profile")}
            </NavLink>
            <Button
              className={classes.logout}
              onClick={logoutHandler}
              size="small"
            >
              {t("nav_bar_logout")}
            </Button>
          </div>
        )}
        <LanguageToggle />
      </div>

      {/* mobile menu */}
      <div className={!nav ? classes.hidden : classes.mobileMenu}>
        {loggedOut && (
          <div className={classes.links}>
            <Link className={classes.login} onClick={handleClick} to="login">
              Login
            </Link>
            <Link onClick={handleClick} to="signup">
              <Button size="small">{t("nav_bar_create_a_profile")}</Button>
            </Link>
          </div>
        )}
        {adminLoggedIn && (
          <div className={classes.links}>
            <NavLink onClick={handleClick} style={isActive} to="members">
              {t("nav_bar_members")}
            </NavLink>
            <NavLink onClick={handleClick} style={isActive} to="library">
              {t("nav_bar_library")}
            </NavLink>
            <NavLink onClick={handleClick} style={isActive} to="programs">
              {t("nav_bar_programs")}
            </NavLink>
            <NavLink onClick={handleClick} style={isActive} to="rewards">
              {t("nav_bar_leaderboard")}
            </NavLink>
            <Button onClick={logoutHandler} size="small">
              {t("nav_bar_logout")}
            </Button>
          </div>
        )}
        {userLoggedIn && (
          <div className={classes.links}>
            <NavLink onClick={handleClick} style={isActive} to="programs">
              {t("nav_bar_programs")}
            </NavLink>
            <NavLink onClick={handleClick} style={isActive} to="activities">
              {t("nav_bar_my_activites")}
            </NavLink>
            <NavLink onClick={handleClick} style={isActive} to="rewards">
              {t("nav_bar_leaderboard")}
            </NavLink>
            <NavLink onClick={handleClick} style={isActive} to="profile">
              {t("nav_bar_profile")}
            </NavLink>
            <Button onClick={logoutHandler} size="small">
              {t("nav_bar_logout")}
            </Button>
          </div>
        )}
        <LanguageToggle />
      </div>
      <div onClick={handleClick} className={classes.hamburger}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
    </div>
  );
};

export default Navbar;
