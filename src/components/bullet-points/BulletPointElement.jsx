import React from 'react';
import { bulletPoints } from '../../data/bulletPoints';
import styles from './BulletPointElement.css';

const BulletPointElement = () => {
  const points = bulletPoints.map((point, index) => (
    <li key={index} className={styles[`point${index}`]}>{point}</li>));
  return (
    <div className={styles.bulletBox}>
      <ul>
        {points}
      </ul>
    </div>
  );
};

export default BulletPointElement;
