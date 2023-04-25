import React from 'react';
import propTypes from 'prop-types';
import { Statictic } from './Statistics.styled';

export const Statistics = ({
  good,
  bad,
  neutral,
  total = 0,
  positivePercentage = 0,
}) => {
  return (
    <Statictic>
      <li>
        Good: <span>{good}</span>
      </li>
      <li>
        Neutral: <span>{neutral}</span>
      </li>
      <li>
        Bad: <span>{bad}</span>
      </li>
      <li>
        Total: <span>{total}</span>
      </li>
      <li>
        Positive feedback: <span>{positivePercentage} %</span>
      </li>
    </Statictic>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

//варіант внутрі зробити
// import { Notification } from 'components/Notification/Notification';
// return total ? (
//   <Statictic>
//     <li>Good: <span>{good}</span></li>
//     <li>Neutral: <span>{neutral}</span></li>
//     <li>Bad: <span>{bad}</span></li>
//     <li>Total: <span>{total}</span></li>
//     <li>Positive feedback: <span>{positivePercentage} %</span>
//     </li>
//   </Statictic>
// ) : (
//   <Notification message="There is no feedback" />
// );
