import React from 'react';
import TechDisplay from '../tech/TechDisplay';
import styles from './TechPage.css';

const TechPage = () => {
  

  return (
    <div className={styles.techPage} >
      <h1 className={styles.techHeadline} >Tech-Stack</h1>
      <TechDisplay />
    </div>
  );
};

export default TechPage;
