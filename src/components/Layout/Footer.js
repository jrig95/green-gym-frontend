import { BsFacebook } from "react-icons/bs";
// import { IoLogoWechat } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs"

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.footer}>
        <div className={classes.logoContainer}>
          <a
              href="/"
              target="_blank"
              rel="noreferrer"
            >
             <BsFacebook />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
            >
             <BsLinkedin />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
            >
             <BsInstagram />
            </a>


        </div>
        <div>沪ICP备2022015857号</div>
      </div>
    </div>
  );
};

export default Footer;
