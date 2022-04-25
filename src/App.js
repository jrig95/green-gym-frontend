import classes from './App.module.css';
import Button from './components/UI/Button';

function App() {
  return (
    <div className={classes.App}>
      <h1>Hello, Green Gym!</h1>
      <Button>This button is green</Button>
      <Button color="blue">This button is blue</Button>
      <Button color="white">This button is white</Button>
    </div>
  );
}

export default App;
