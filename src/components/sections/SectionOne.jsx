import React from 'react';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import styles from './SectionOne.css';

const SectionOne = () => {
  return (
    <div className={styles.sectionOne}>
      <HomePage />
      <ProjectsPage />
    </div>
  );
};

export default SectionOne;
