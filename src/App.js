import { Routes, Route } from "react-router-dom";

// import classes from "./App.module.css";
// import LoginForm from "./components/Forms/LoginForm";
import Layout from "./components/Layout/Layout";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ForgotPassword from "./Pages/UserFormPages/ForgotPassword";
// import Login from "./Pages/UserFormPages/Login";
// import ResetPassword from "./Pages/UserFormPages/ResetPassword";
// import SignUp from "./Pages/UserFormPages/SignUp";
// import UpdateProfile from "./Pages/UserFormPages/UpdateProfile";
import ProfilePage from "./Pages/ProfilePages/ProfilePage";
// import UpdateProfilePage from "./Pages/ProfilePages/UpdateProfilePage";
import ProfileResetPasswordPage from "./Pages/ProfilePages/ProfileResetPasswordPage";
import ProgramsPage from "./Pages/ProgramPages/ProgramsPage";
import ProgramPage from "./Pages/ProgramPages/ProgramPage";
import ActivitiesPage from "./Pages/WorkoutPages/ActivitesPage";
import DailyWorkoutPage from "./Pages/WorkoutPages/DailyWorkoutPage";
import RewardsPage from "./Pages/RewardPages/RewardsPage";
// import MembersPage from "./Pages/MemberPages/MembersPage";
import MemberPage from "./Pages/MemberPages/MemberPage";
import DailyWorkout from "./components/Exercise/DailyWorkout";
import UpdateProfilePage from "./Pages/ProfilePages/UpdateProfilePage";
// import ProgramPage from "./Pages/ProgramPages/ProgramPage";
// import AddProgramPage from "./Pages/AdminFormPages/AddProgramPage";
// import AddWorkoutPage from "./Pages/AdminFormPages/AddWorkout";
// import ProgramsPage from "./Pages/ProgramPages/ProgramsPage";
// import LibraryItemsPage from "./Pages/LibraryPages/LibraryItemsPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="programs/:programId" element={<ProgramPage />} />
        <Route path="activities" element={<ActivitiesPage />}/>
        <Route path="activities/workout" element={<DailyWorkoutPage />}/>
        <Route path="rewards" element={<RewardsPage />}/>
        <Route path="profile" element={<ProfilePage />}/>
        <Route path="profile/update" element={<UpdateProfilePage />}/>
      </Routes>
    </Layout>
  );
}

export default App;
