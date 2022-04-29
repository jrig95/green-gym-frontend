import classes from './App.module.css';
import Layout from './components/Layout/Layout';
import LandingPage from './Pages/LandingPage/LandingPage';
import SignUp from './Pages/UserFormPages/SignUp';

// routes

function App() {
  return (
    <Layout>
      {/* <LandingPage /> */}
      <SignUp />
    </Layout>
  );
}

export default App;
