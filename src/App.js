import classes from './App.module.css';
import LoginForm from './components/Forms/LoginForm';
import Layout from './components/Layout/Layout';
import LandingPage from './Pages/LandingPage/LandingPage';
import ForgotPassword from './Pages/UserFormPages/ForgotPassword';
import Login from './Pages/UserFormPages/Login';
import ResetPassword from './Pages/UserFormPages/ResetPassword';
import SignUp from './Pages/UserFormPages/SignUp';
import UpdateProfile from './Pages/UserFormPages/UpdateProfile';
import ProfilePage from './Pages/Profile/ProfilePage';
import UpdateProfilePage from './Pages/Profile/UpdateProfilePage';

function App() {
  return (
    <Layout>
      <UpdateProfilePage />
      <ProfilePage />
    </Layout>
  );
}

export default App;
