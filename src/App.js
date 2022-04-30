import classes from "./App.module.css";
import LoginForm from "./components/Forms/LoginForm";
import Layout from "./components/Layout/Layout";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ForgotPassword from "./Pages/UserFormPages/ForgotPassword";
import Login from "./Pages/UserFormPages/Login";
import ResetPassword from "./Pages/UserFormPages/ResetPassword";
import SignUp from "./Pages/UserFormPages/SignUp";
import UpdateProfile from "./Pages/UserFormPages/UpdateProfile";
import ProfilePage from "./Pages/ProfilePages/ProfilePage";
import UpdateProfilePage from "./Pages/ProfilePages/UpdateProfilePage";
import ProfileResetPasswordPage from "./Pages/ProfilePages/ProfileResetPasswordPage";
import ProgramsPage from "./Pages/ProgramPages/ProgramsPage";
import CarouselMain from "./components/UI/CarouselMain";
import ProfileBanner from "./components/Profile/ProfileBanner";

const DUMMY_DATA = {
  user_one: {
    name: "Darren Lewis",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    calories: "14532",
  },
};

function App() {
  return (
    <Layout>
      <ProgramsPage />
      <CarouselMain />
      <ProfileBanner
        title="My Profile"
        calories={DUMMY_DATA.user_one.calories}
        name={DUMMY_DATA.user_one.name}
        image={DUMMY_DATA.user_one.image}
      />
    </Layout>
  );
}

export default App;
