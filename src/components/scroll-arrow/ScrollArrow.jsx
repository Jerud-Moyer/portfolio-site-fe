import React from 'react';
import styles from './ScrollArrow.css';

const ScrollArrow = () => {
  return (
    <div className={styles.arrowBox}>
      <div className={styles.arrow} >
         ︾
      </div>
    </div>
  );
};

export default ScrollArrow;
