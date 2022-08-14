import React from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectItem from './ProjectItem';
import ScrollArrow from '../scroll-arrow/ScrollArrow';
import PropTypes from 'prop-types';
import styles from './ProjectList.css';

const ProjectList = ({ projects, forHomePage, mobile }) => {
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: .3,
  });

  const projectElements = projects.map(project => (
    <li key={project.name} className={styles.projectListItem}>
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

      <div className={styles.listBox}>
        {forHomePage &&
          <h1 className={inView 
            ? styles.headline 
            : styles.invisible }
          >Projects
          </h1>
        }

        {mobile &&
          <h1 className={inView 
            ? styles.headline 
            : styles.invisible }
          >Mobile Projects
          </h1>
        }

        <ul className={styles.projectList} >
          {projectElements}
        </ul>
        
        {forHomePage &&
        <div className={styles.arrowBox}>
          <ScrollArrow />
        </div>
        }
      </div>
      
      
      
    </div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array,
  forHomePage: PropTypes.bool,
  mobile: PropTypes.bool
};

export default ProjectList;
