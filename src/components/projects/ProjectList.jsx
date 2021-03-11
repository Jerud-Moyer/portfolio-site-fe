import React from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectItem from './ProjectItem';
import { projects } from '../../data/projects.js';
import styles from './ProjectList.css';
import ScrollArrow from '../scroll-arrow/ScrollArrow';

const ProjectList = () => {
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: .3,
  });

  const projectElements = projects.map(project => (
    <li key={project.name}>
      <ProjectItem {...project} />
    </li>
  ));

  return (
    <div
      className={inView ? styles.projectBox : null}
      ref={ref}
      style={{
        transition: 'ease-in',
        visibility: inView ? 'visible' : 'hidden'
      }}
    >
      
      <>
        <h1 className={inView 
          ? styles.headline 
          : styles.invisible }
        >Projects
        </h1>
        <ul className={styles.projectList} >
          {projectElements}
        </ul>
        <div className={styles.arrowBox}>
          <ScrollArrow />
        </div>
      </>
      
      
    </div>
  );
};

export default ProjectList;
