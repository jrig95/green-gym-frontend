import Background from "../../components/Layout/Background";
import classes from "./UserFormPageTemplate.module.css";


const UserFormPageTemplate = ({ children }) => {
  return (
    <Background>
      <div className={classes.container}>
        {children}
      </div>
    </Background>
  );
};

export default UserFormPageTemplate;
