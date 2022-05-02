import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './RewardCard.module.css';

const RewardCard = () => {
  return <Card className={classes.card}>
    <h2>50,000 pts</h2>
    <h2>Rewards Title</h2>
    <Button size="small">Redeem</Button>
    <img src=""/>
  </Card>
};

export default RewardCard;