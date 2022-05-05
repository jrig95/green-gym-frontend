import Card from "../../UI/Card";
import classes from "./MemberCard.module.css";

const MemberCard = () => {
  return (
    <Card className={classes.card}>
      <div className={classes.profilePictureContainer}>
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className={classes.userDetailsContainer}>
        <h2>
          <b>First Name: </b>Darren
        </h2>
        <h2>
          <b>Last Name: </b>Lewis
        </h2>
        <h2>
          <b>E-Mail: </b>darren@lewis.com
        </h2>
        <h2>
          <b>Age: </b>32
        </h2>
        <h2>
          <b>Fitness Level: </b>Intermediate
        </h2>
        <h2>
          <b>Passions: </b>I love to play football and I run a lot
        </h2>
        <h2>
          <b>Calories: </b>123,421
        </h2>
        <h2>
          <b>Signed Up: </b>1 years, 2 months ago
        </h2>
        <h2>
          <b>Last Logged In: </b>1 day ago
        </h2>
      </div>
    </Card>
  );
};

export default MemberCard;
