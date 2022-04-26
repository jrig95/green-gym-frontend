import classes from './App.module.css';
import LanguageToggle from './components/LanguageToggle/LanguageToggle';
import Layout from './components/Layout/Layout';
import LandingPage from './Pages/LandingPage/LandingPage';

function App() {
  return (
    <Layout>
      <LanguageToggle />
      <LandingPage />
    </Layout>
  );
}

export default App;
