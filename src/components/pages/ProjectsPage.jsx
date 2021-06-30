import React from 'react';
import ProjectList from '../projects/ProjectList';
import ScrollArrow from '../scroll-arrow/ScrollArrow';
import { mobileProjects, projects } from '../../data/projects';
import styles from './ProjectsPage.css';

const ProjectsPage = () => {
  return (
    <div 
      className={styles.projectsPage} 
      id={'projects'}
    >
      <ProjectList projects={projects} forHomePage/>
      <ProjectList projects={mobileProjects} mobile/>
      <div className={styles.arrowBox}>
        <ScrollArrow />
      </div>
    </div>
  );
};

export default ProjectsPage;
