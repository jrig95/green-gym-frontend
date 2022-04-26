import { useState } from "react";
import classes from "./LanguageToggle.module.css";

const LanguageToggle = () => {
  const [languageCode, setLanguageCode] = useState(true);
  
  const changeLanguageHandler = () => {
    setLanguageCode((prevLanguageCode) => !prevLanguageCode);
    // const newCode = languageCode ? "en" : "cn";
    // i18next.changeLanguage(newCode);
  };

  const toggleGreen = languageCode ? "#55CA8A" : "#aeaeae";
  const toggleMoveCircle = languageCode ? `${classes.circle} ${classes.circleLeft}` : `${classes.circle} ${classes.circleRight}`


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