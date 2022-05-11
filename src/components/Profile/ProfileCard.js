import { Link } from "react-router-dom";

import classes from "./ProfileCard.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const ProfileCard = ({}) => {
  return (
    <Card className={classes.card}>
      <Link to="update">
        <Button>Update Profile</Button>
      </Link>
      <Link to="change-password">
        <Button>Change Password</Button>
      </Link>
    </Card>
  );
};

export default ProfileCard;
