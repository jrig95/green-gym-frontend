import classes from "./Navbar.module.css";
import LanguageToggle from "../LanguageToggle/LanguageToggle";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <h1>Green Gym</h1>
      <div className={classes.linksContainer}>
        <LanguageToggle/>
      </div>
    </div>
  );
};

export default Navbar;