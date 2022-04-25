import classes from './App.module.css';
import Button from './components/UI/Button';

function App() {
  return (
    <div className={classes.container}>
      <h1>Hello, Green Gym!</h1>
      <Button>This button is green</Button>
      <Button color="blue">This button is blue</Button>
      <Button color="white">This button is white</Button>
      <Button size="small">This button is green</Button>
      <Button size="small" color="blue">This button is blue</Button>
      <Button size="small" color="white">This button is white</Button>
      <Button disabled={true} size="small" color="white">This button is disabled</Button>
    </div>
  );
}

export default App;
