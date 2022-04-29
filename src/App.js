import classes from './App.module.css';
import LoginForm from './components/Forms/LoginForm';
import Layout from './components/Layout/Layout';
import LandingPage from './Pages/LandingPage/LandingPage';
import ForgotPassword from './Pages/UserFormPages/ForgotPassword';
import Login from './Pages/UserFormPages/Login';
import ResetPassword from './Pages/UserFormPages/ResetPassword';
import SignUp from './Pages/UserFormPages/SignUp';

function App() {
  return (
    <Layout>
      <ResetPassword />
    </Layout>
  );
}

export default App;
