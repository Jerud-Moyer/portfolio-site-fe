import React from 'react';

import ProjectsPage from '../pages/ProjectsPage';
import styles from './Section.css';

const SectionOne = () => {
  return (
    <div className={styles.sectionOne}>
      <ProjectsPage />
    </div>
  );
};

export default SectionOne;
