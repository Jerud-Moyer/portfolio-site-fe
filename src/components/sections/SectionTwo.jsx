import React from 'react';
import ProjectsPage from '../pages/ProjectsPage';
import RecentWork from '../work/RecentWork';
import styles from './Section.css';



const SectionTwo = () => {
  return (
    <div className={styles.sectionTwo} >
      <RecentWork />
    </div>
  );
};

export default SectionTwo;
