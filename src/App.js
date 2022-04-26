import classes from './App.module.css';
import Layout from './components/Layout/Layout';
import LandingPage from './Pages/LandingPage/LandingPage';
import Button from './components/UI/Button';

// routes

function App() {
  return (
    <Layout>
      <LandingPage />
    </Layout>
  );
}

export default App;
