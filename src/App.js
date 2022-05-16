import { ChakraProvider } from "@chakra-ui/react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";

import { queryClient } from "./react-query/queryClient";

import Layout from "./components/Layout/Layout";
import LandingPage from "./Pages/LandingPage/LandingPage";
// import ForgotPassword from "./Pages/UserFormPages/ForgotPassword";
import Login from "./Pages/UserFormPages/Login";
// import ResetPassword from "./Pages/UserFormPages/ResetPassword";
import SignUp from "./Pages/UserFormPages/SignUp";
// import UpdateProfile from "./Pages/UserFormPages/UpdateProfile";
import ProfilePage from "./Pages/ProfilePages/ProfilePage";
import ProfileResetPasswordPage from "./Pages/ProfilePages/ProfileResetPasswordPage";
import ProgramsPage from "./Pages/ProgramPages/ProgramsPage";
import ProgramPage from "./Pages/ProgramPages/ProgramPage";
import ActivitiesPage from "./Pages/WorkoutPages/ActivitesPage";
import DailyWorkoutPage from "./Pages/WorkoutPages/DailyWorkoutPage";
import RewardsPage from "./Pages/RewardPages/RewardsPage";
import MembersPage from "./Pages/MemberPages/MembersPage";
import MemberPage from "./Pages/MemberPages/MemberPage";
// import DailyWorkout from "./components/Exercise/DailyWorkout";
import UpdateProfilePage from "./Pages/ProfilePages/UpdateProfilePage";
// import ProgramPage from "./Pages/ProgramPages/ProgramPage";
import AddProgramPage from "./Pages/AdminFormPages/AddProgramPage";
// import AddWorkoutPage from "./Pages/AdminFormPages/AddWorkout";
// import ProgramsPage from "./Pages/ProgramPages/ProgramsPage";
import LibraryItemsPage from "./Pages/LibraryPages/LibraryItemsPage";
import NotFoundPage from "./Pages/ErrorPages/NotFoundPage";
import PurchasePage from "./Pages/ProgramPages/PurchasePage";
import AddWorkoutPage from "./Pages/AdminFormPages/AddWorkout";

function App() {
  // const queryClient = new QueryClient();

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="programs" element={<ProgramsPage />} />
            <Route path="programs/:programId" element={<ProgramPage />} />
            <Route
              path="programs/:programId/purchase"
              element={<PurchasePage />}
            />
            <Route path="programs/add-program" element={<AddProgramPage />} />
            <Route
              path="programs/add-program/add-workout"
              element={<AddWorkoutPage />}
            />
            <Route path="add-workout" element={<AddWorkoutPage />} />
            <Route path="activities" element={<ActivitiesPage />} />
            <Route path="activities/workout" element={<DailyWorkoutPage />} />
            <Route path="rewards" element={<RewardsPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="profile/update" element={<UpdateProfilePage />} />
            <Route
              path="profile/change-password"
              element={<ProfileResetPasswordPage />}
            />
            <Route path="members" element={<MembersPage />} />
            <Route path="members/:memberId" element={<MemberPage />} />
            <Route path="library" element={<LibraryItemsPage />} />
          </Routes>
        </Layout>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
