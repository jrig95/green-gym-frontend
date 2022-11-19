import i18next from "i18next";
import jsCookie from "js-cookie";

import classes from "./LanguageToggle.module.css";

const LanguageToggle = () => {
  // Get language code from cookie
  // set is English based on cooked language code
  const isEnglish = jsCookie.get("i18next") === "en";

  const changeLanguageHandler = () => {
    const newCode = isEnglish ? "cn" : "en";
    i18next.changeLanguage(newCode);
  };

  const buttonClasses = !isEnglish
    ? `${classes.button}`
    : `${classes.button} ${classes.buttonGrey}`;
  const toggleGreen = !isEnglish ? "#55ca8a" : "#aeaeae";
  const toggleMoveCircle = !isEnglish
    ? `${classes.circle} ${classes.circleLeft}`
    : `${classes.circle} ${classes.circleRight}`;

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
