import classes from "./ProgramCard.module.css";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { RiAddCircleLine } from "react-icons/ri";



export const AddProgramCard = () => {
    const responsiveFontSize = "1.5rem";
    const {isAdmin: admin} = useContext(AuthContext); 
    return (
        <Card className={classes.card}>
      {admin && (
        <div className={classes.icons}>
          <div className={classes.iconBin}>
          </div>
        </div>
      )}
      <Link to='add-program'>
        <div className={classes.title}>
          <h1
            style={{
              fontSize: responsiveFontSize,
            }}
          >
            ADD PROGRAM
          </h1>
        </div>
        <div className={classes.image}>
            <RiAddCircleLine size="8rem" color="green"/>
        </div>
        <h3 className={classes.description}>Click here to create a new program</h3>
      </Link>
    </Card>
    )
}