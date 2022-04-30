import classes from "./ProgramCard.module.css";
import Card from "../UI/Card";

const ProgramCard = () => {
  return (
    <Card className={classes.card}>
      <h1>Title</h1>
      <img
        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <h2>Description of the program</h2>
    </Card>
  );
};

export default ProgramCard;
