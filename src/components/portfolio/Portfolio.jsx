import React from 'react';
import SectionOne from '../sections/SectionOne';
import SectionTwo from '../sections/SectionTwo';
import styles from './Portfolio.css';


const Portfolio = () => {
  return (
    <div className={styles.portfolio} >
      <SectionOne />
      <SectionTwo />
    </div>
  );
};

export default Portfolio;
