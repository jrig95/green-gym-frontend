import { useState } from "react";
import { HiCamera } from "react-icons/hi";

import UpdateProfileImage from "./UpdateProfileImage";
import classes from "./ProfileBanner.module.css";
import TreesPlanted from "./TreesPlanted";
import { useTranslation } from "react-i18next";


const ProfileBanner = ({
  title,
  calories,
  image,
  name,
  update,
  rewards,
  points,
}) => {
  const { t } = useTranslation();
  const [updateProfileImageIsShown, setUpdateProfileImageIsShown] = useState(false);

  let caloriesNum = 0;
  let caloriesBurned = "";
  let stringifiedPoints = ""

  if (points) {
    caloriesNum = parseInt(calories);
  }

  if (calories) {
    caloriesBurned = caloriesNum.toLocaleString("en-US");
    stringifiedPoints = points.toLocaleString("en-US");
  }

  const showUpdateProfileImageHandler = () => {
    setUpdateProfileImageIsShown(true);
  };

  const hideUpdateProfileImageHandler = () => {
    setUpdateProfileImageIsShown(false);
  };


  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <h1>{title || "Profile Banner"}</h1>
        {!!calories && (
          <p className={classes.caloriesText}>
            {caloriesBurned} {t("profile_banner_calories_burned")}
          </p>
        )}
      </div>
      <div className={classes.imageContainer}>
        <img src={image} alt={name} />
        {/* clicking this link should add an image to a users profile */}
        {updateProfileImageIsShown && <UpdateProfileImage onClose={hideUpdateProfileImageHandler}/>}
        {update && (
          <div className={classes.cameraIcon}>
            <div onClick={showUpdateProfileImageHandler}>
              <HiCamera />
            </div>
          </div>
        )}
        <h2 className={classes.name}>{name}</h2>
        {rewards && (
          <h3 className={classes.points}>
            <b>Current Points:</b> {stringifiedPoints}
          </h3>
        )}
        {!update && !rewards && <TreesPlanted calories={caloriesNum} />}
      </div>
    </div>
  );
};

export default ProfileBanner;
