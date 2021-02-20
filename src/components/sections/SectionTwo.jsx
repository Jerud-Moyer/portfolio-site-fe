import React from 'react';
import TechPage from '../pages/TechPage';
import WorkPage from '../pages/WorkPage';
import styles from './Section.css';



const SectionTwo = () => {
  return (
    <div className={styles.sectionTwo} >
      <WorkPage />
      <TechPage />
    </div>
  );
};

export default SectionTwo;
