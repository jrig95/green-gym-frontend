import { useState } from "react";
import i18next from "i18next";

import classes from "./LanguageToggle.module.css";

const LanguageToggle = () => {
  // Get language code from cookie
  // set is English based on cooked language code

  const [isEnglish, setIsEnglish] = useState(true);
  
  const changeLanguageHandler = () => {
    setIsEnglish((prevIsEnglish) => !prevIsEnglish);
    const newCode = isEnglish ? "en" : "cn";
    i18next.changeLanguage(newCode);
  };

  const toggleGreen = isEnglish ? "#55CA8A" : "#aeaeae";
  const toggleMoveCircle = isEnglish ? `${classes.circle} ${classes.circleLeft}` : `${classes.circle} ${classes.circleRight}`


  return (
    <button
        className={classes.button}
        type="button"
        onClick={changeLanguageHandler}
        style={{ color: toggleGreen, border: `2px solid ${toggleGreen}` }}
      >
        <svg
          className={toggleMoveCircle}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle  className="circle" cx="12" cy="12" r="12" fill={toggleGreen} />
        </svg>

        <p className={classes.buttonEnglish}>中</p>
        <p className={classes.buttonChinese}>EN</p>
      </button>
  )
};

export default LanguageToggle;