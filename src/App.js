import classes from './App.module.css';
import Button from './components/UI/Button';

function App() {
  return (
    <div className={classes.App}>
      <h1>Hello, Green Gym!</h1>
      <Button>This is a button</Button>
    </div>
  );
}

export default App;
