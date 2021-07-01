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
      <div className={styles.listBox1}>
        <ProjectList projects={projects} forHomePage/>
      </div>
      <div className={styles.listBox2}>
        <ProjectList projects={mobileProjects} mobile/>
      </div>
      <div className={styles.arrowBox}>
        <ScrollArrow />
      </div>
    </div>
  );
};

export default ProjectsPage;
