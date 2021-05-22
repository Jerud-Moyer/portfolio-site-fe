import React from 'react';
import ProjectList from '../projects/ProjectList';
import { projects } from '../../data/projects';
import styles from './ProjectsPage.css';

const ProjectsPage = () => {
  return (
    <div className={styles.projectsPage} id={'projects'}>
      <ProjectList projects={projects} forHomePage/>
    </div>
  );
};

export default ProjectsPage;
