import classes from "./Navbar.module.css";
import LanguageToggle from "../LanguageToggle/LanguageToggle";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <h1>Green Gym</h1>
      <LanguageToggle/>
    </div>
  );
};

export default Navbar;