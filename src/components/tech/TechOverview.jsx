import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './TechComponent.css';

const TechOverview = () => {
  const [ref, inView] = useInView({
    threshold: .4
  });

  return (
    <div ref={ref} className={inView ? styles.overview : styles.invisible}>
      
      <>
        <p>〔</p>
        <div>Front-End,</div>
        <div>Back-End,</div>
        <div>Mobile</div>
        <p>〕</p>
      </>
      
    </div>
  );
};

export default TechOverview;
