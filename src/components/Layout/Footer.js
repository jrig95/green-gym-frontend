import { BsFacebook } from "react-icons/bs";
import { IoLogoWechat } from "react-icons/io5";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <BsFacebook />
        <IoLogoWechat />
      </div>
    </div>
  );
};

export default Footer;
