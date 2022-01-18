import PropTypes from 'prop-types';
import { List } from './Statistics.styled';


const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <List>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>

      <li>Total: {total}</li>
      <li>Positive Feedback: {percent}%</li>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};

export default Statistics;