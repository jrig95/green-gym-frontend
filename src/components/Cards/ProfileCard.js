import classes from "./ProfileCard.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const ProfileCard = ({className}) => {
  return (
    <Card className={classes.card}>
      <Button>Update Profile</Button>
      <Button>Change Password</Button>
    </Card>
  );
};

export default ProfileCard;
