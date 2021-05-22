import React from 'react';
import NavBar from '../navbar/NavBar';
import SectionFive from '../sections/SectionFive';
import SectionFour from '../sections/SectionFour';
import SectionOne from '../sections/SectionOne';
import SectionThree from '../sections/SectionThree';
import SectionTwo from '../sections/SectionTwo';
import SectionZero from '../sections/SectionZero';
import styles from './Portfolio.css';


const Portfolio = () => {
  return (
    <div className={styles.portfolio} >
      <nav><NavBar /></nav>
      <SectionZero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />    
    </div>
  );
};

export default Portfolio;
