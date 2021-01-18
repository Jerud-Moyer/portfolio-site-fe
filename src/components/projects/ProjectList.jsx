import React from 'react';
import ProjectItem from './ProjectItem';
import { projects } from '../../data/projects.js';
import styles from './ProjectList.css';

const ProjectList = () => {
  const projectElements = projects.map(project => (
    <li key={project.name}>
      <ProjectItem {...project} />
    </li>
  ));

  return (
    <div className={styles.projectBox} >
      <ul className={styles.projectList} >
        {projectElements}
      </ul>
      
    </div>
  );
};

export default ProjectList;
