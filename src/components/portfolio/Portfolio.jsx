import React from 'react';
import SectionOne from '../sections/SectionOne';
import SectionThree from '../sections/SectionThree';
import SectionTwo from '../sections/SectionTwo';
import SectionZero from '../sections/SectionZero';
import styles from './Portfolio.css';


const Portfolio = () => {
  return (
    <div className={styles.portfolio} >
      <SectionZero />      
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default Portfolio;
