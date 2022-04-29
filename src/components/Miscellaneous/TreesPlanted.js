import Button from '../UI/Button';
import { BsFillTreeFill } from 'react-icons/bs';

const TreesPlanted = ({calories}) => {
  const treesPlanted = calories;

  return <Button><BsFillTreeFill/> {treesPlanted} trees planted</Button>
};

export default TreesPlanted;