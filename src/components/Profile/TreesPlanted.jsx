import classes from './TreesPlanted.module.css';
import { useTranslation } from "react-i18next";
import { GiBamboo } from "react-icons/gi";


const TreesPlanted = ({calories}) => {
  const { t } = useTranslation();
  const treesPlanted = Math.floor(calories / 10000);
  const translationtTreesPlanted = t("trees_planted_trees_planted")
  const translationtTreePlanted = t("trees_planted_tree_planted")

  const treeMessage = treesPlanted !== 1 ? translationtTreesPlanted : translationtTreePlanted

  return <div className={classes.treeButton}><GiBamboo/>{treesPlanted}{treeMessage}</div>
};

export default TreesPlanted;
