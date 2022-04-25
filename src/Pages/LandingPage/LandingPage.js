import classes from "./LandingPage.module.css";
import Card from "../../components/UI/Card";
import Footer from "../../components/Layout/Footer";

const LandingPage = () => {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <Card>
          <h1>Test Text</h1>
        </Card>
      </div>
    </div>
  );
};

export default LandingPage;
