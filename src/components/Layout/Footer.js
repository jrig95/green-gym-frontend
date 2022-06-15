import { IoLogoWechat } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs"

import classes from "./Footer.module.css";
import GreenGym from '../../assets/green-gym.jpg'

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.footer}>
        <div className={classes.logoContainer}>
          <a
              href={GreenGym}
              target="_blank"
              rel="noreferrer"
            >
             <IoLogoWechat />
            </a>
            <a
              href="https://www.linkedin.com/company/relabs-co/about/?viewAsMember=true"
              target="_blank"
              rel="noreferrer"
            >
             <BsLinkedin />
            </a>
            <a
              href="https://www.instagram.com/relabs.co"
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
