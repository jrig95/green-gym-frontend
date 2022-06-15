import Card from "../../UI/Card";
import classes from "./MemberCard.module.css";

const MemberCard = ({ user }) => {  
  return (
    <Card className={classes.card}>
      <div className={classes.profilePictureContainer}>
        <img
          src={user.photo_url}
          alt={`${user.first_name}`}
        />
      </div>
      <div className={classes.userDetailsContainer}>
        <h2>
          <b>First Name: </b>{user.first_name}
        </h2>
        <h2>
          <b>Last Name: </b>{user.last_name}
        </h2>
        <h2>
          <b>E-Mail: </b>{user.email}
        </h2>
        <h2>
          <b>Age: </b>{user.age}
        </h2>
        <h2>
          <b>Fitness Level: </b>{user.user_fitness_level}
        </h2>
        <h2>
          <b>Passions: </b>{user.user_passions}
        </h2>
        <h2>
          <b>Calories: </b>{user.user_total_calories}
        </h2>
        <h2>
          <b>Signed Up: </b>{user.created_at}
        </h2>
        <h2>
          <b>Last Logged In: </b>{user.last_sign_in_at}
        </h2>
      </div>
    </Card>
  );
};

export default MemberCard;
