import React from 'react';
import RecentWork from '../work/RecentWork';
import styles from './WorkPage.css';


const WorkPage = () => {
  return (
    <div className={styles.workPageBox} >
      <RecentWork />
      
    </div>
  );
};

export default WorkPage;
