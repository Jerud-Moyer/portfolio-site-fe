import React from 'react';
import { useInView } from 'react-intersection-observer';
import ScrollArrow from '../scroll-arrow/ScrollArrow';
import TechDisplay from '../tech/TechDisplay';
import TechOverview from '../tech/TechOverview';
import styles from './TechPage.css';

const TechPage = () => {
  const [ref, inView] = useInView({
    threshold: .3
  });
  

  return (
    
    <div 
      className={styles.techPage}
      id={'tech'} 
      ref={ref}
    >
      <div className={styles.techPageInner}  >
        <h1 
          className={inView 
            ? styles.techHeadline 
            : styles.invisible}
        >Tech-Stack
        </h1>
        <div 
          className={inView 
            ? styles.midDisplay 
            : styles.invisible}>
          <TechDisplay />
        </div>
        <div 
          className={inView 
            ? styles.tOverview 
            : styles.invisible}>
          <TechOverview />
        </div>
        <div 
          className={styles.arrowBox}>
          <ScrollArrow />
        </div>
      </div>
      
    </div>
     
  );
};

export default TechPage;
