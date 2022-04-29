import classes from './TreesPlanted.module.css';
import { BsFillTreeFill } from 'react-icons/bs';

const TreesPlanted = ({calories}) => {
  const treesPlanted = parseInt(calories);

  const treeMessage = treesPlanted !== 1 ? " trees planted" : " tree planted"

  return <div className={classes.treeButton}><BsFillTreeFill/>{treesPlanted}{treeMessage}</div>
};

export default TreesPlanted;