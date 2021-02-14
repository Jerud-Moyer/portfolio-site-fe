import React from 'react';
import ContactElement from '../contact/ContactElement';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import styles from './Section.css';

const SectionOne = () => {
  return (
    <div className={styles.sectionOne}>
      {/* <ContactElement
        className={styles.contactElement} /> */}
      <HomePage />
      <ProjectsPage />
    </div>
  );
};

export default SectionOne;
