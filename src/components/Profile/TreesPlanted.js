import classes from './TreesPlanted.module.css';
import { BsFillTreeFill } from 'react-icons/bs';

const TreesPlanted = ({calories}) => {
  const treesPlanted = Math.round(calories / 10000);

  const treeMessage = treesPlanted !== 1 ? " trees planted" : " tree planted"

  return <div className={classes.treeButton}><BsFillTreeFill/>{treesPlanted}{treeMessage}</div>
};

export default TreesPlanted;