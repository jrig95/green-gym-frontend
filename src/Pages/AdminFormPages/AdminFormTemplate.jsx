import classes from "./AdminFormTemplate.module.css";

const AdminFormTemplate = ({ children}) => {
  return <div className={classes.container}>{children}</div>;
};

export default AdminFormTemplate;
