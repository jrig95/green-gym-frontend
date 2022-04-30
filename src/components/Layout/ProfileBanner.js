import { Fragment } from "react";
import { HiCamera } from 'react-icons/hi';

import classes from "./ProfileBanner.module.css";
import TreesPlanted from "../Cards/TreesPlanted";


const ProfileBanner = ({ title, calories, image, name, update }) => {
  const caloriesNum = parseInt(calories);
  const caloriesBurned = caloriesNum.toLocaleString("en-US");

  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <h1>{title || "Profile Banner"}</h1>
        {calories && (
          <p className={classes.caloriesText}>{caloriesBurned} calories burned</p>
        )}
      </div>
      <div className={classes.imageContainer}>
        <img src={image} />
        {update && <HiCamera />}
        <h2 className={classes.name}>{name}</h2>
        <TreesPlanted calories={caloriesNum}/>
      </div>
    </div>
  );
};

export default ProfileBanner;
