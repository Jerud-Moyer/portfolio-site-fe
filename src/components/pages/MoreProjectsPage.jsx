import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects, moreProjects, mobileProjects } from '../../data/projects';
import ProjectList from '../projects/ProjectList';
import styles from './MoreProjects.css';

const MoreProjectsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={styles.bigBox} >
      <Link to={'/#projects'} className={styles.link} >
        <div className={styles.backLink}>
          {'<< back to main'}
        </div>
      </Link>
      <ProjectList projects={moreProjects} />
      <ProjectList projects={mobileProjects} />
      <ProjectList projects={projects} />
    </div>
  );
};

export default MoreProjectsPage;
