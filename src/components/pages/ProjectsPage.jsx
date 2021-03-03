import React from 'react';
import ProjectList from '../projects/ProjectList';
import styles from './ProjectsPage.css';

const ProjectsPage = () => {
  return (
    <div className={styles.projectsPage} >
      <ProjectList />
    </div>
  );
};

export default ProjectsPage;
