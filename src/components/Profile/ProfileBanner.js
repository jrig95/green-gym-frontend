import { Fragment } from "react";
import { HiCamera } from "react-icons/hi";

import classes from "./ProfileBanner.module.css";
import TreesPlanted from "./TreesPlanted";

const ProfileBanner = ({
  title,
  calories,
  image,
  name,
  update,
  rewards,
  points,
}) => {

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

  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <h1>{title || "Profile Banner"}</h1>
        {calories && (
          <p className={classes.caloriesText}>
            {caloriesBurned} calories burned
          </p>
        )}
      </div>
      <div className={classes.imageContainer}>
        <img src={image} alt={name} />
        {/* clicking this link should add an image to a users profile */}
        {update && (
          <div className={classes.cameraIcon}>
            <a href="">
              <HiCamera />
            </a>
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
