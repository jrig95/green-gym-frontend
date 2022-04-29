import { Fragment } from "react";
import classes from "./ProfileBanner.module.css";
import TreesPlanted from "../Miscellaneous/TreesPlanted";

const ProfileBanner = ({ title, calories, image, name }) => {
  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <h1>{title || "Profile Banner"}</h1>
        {calories && (
          <p className={classes.caloriesText}>{calories} calories burned</p>
        )}
      </div>
      <div className={classes.imageContainer}>
        <img src={image} />
        <h2 className={classes.name}>{name}</h2>
        <TreesPlanted calories={calories}/>
      </div>
    </div>
  );
};

export default ProfileBanner;
