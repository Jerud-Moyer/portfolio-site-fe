import React from 'react';
import FactList from '../facts/FactList';
import BioPage from '../pages/BioPage';
import styles from './Section.css';

const SectionFive = () => {
  return (
    <div className={styles.sectionFive} >
      <BioPage />
      <FactList />
    </div>
  );
};

export default SectionFive;
