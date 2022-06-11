import { useEffect, useState } from "react";
import i18next from "i18next";
import jsCookie from "js-cookie";

import classes from "./LanguageToggle.module.css";

const LanguageToggle = () => {
  // Get language code from cookie
  // set is English based on cooked language code

  const [isEnglish, setIsEnglish] = useState(jsCookie.get("i18next") === "en");

  const changeLanguageHandler = () => {
    setIsEnglish((prevIsEnglish) => !prevIsEnglish);
  };

  useEffect(() => {
    const newCode = isEnglish ? "en" : "cn";
    i18next.changeLanguage(newCode);
  }, [isEnglish]);

  const buttonClasses = isEnglish
    ? `${classes.button} ${classes.buttonGrey}`
    : `${classes.button}`;
  const toggleGreen = isEnglish ? "#aeaeae" : "#55ca8a";
  const toggleMoveCircle = isEnglish
    ? `${classes.circle} ${classes.circleRight}`
    : `${classes.circle} ${classes.circleLeft}`;

  return (
    <button
      className={buttonClasses}
      type="button"
      onClick={changeLanguageHandler}
    >
      <svg
        className={toggleMoveCircle}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle className="circle" cx="12" cy="12" r="12" fill={toggleGreen} />
      </svg>

      <p className={classes.buttonEnglish}>中</p>
      <p className={classes.buttonChinese}>EN</p>
    </button>
  );
};

export default LanguageToggle;
