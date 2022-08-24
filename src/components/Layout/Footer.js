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
          <div className={classes.content}>

          <div className={classes.companyName}>
          <p>上海瑞绿商务咨询有限公司</p>
          </div>

        <div className={classes.credentials}>
        <a
              href="https://beian.miit.gov.cn/#/home"
              target="_blank"
              rel="noreferrer"
            >沪ICP备2022015857号</a>
        <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010102002956"
              target="_blank"
              rel="noreferrer"
            >公安联网备案号: 31011002005949</a>
        </div>

        <div className={classes.icons}>
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
        </div>


      </div>
    </div>
    </div>
  );
};

export default Footer;
