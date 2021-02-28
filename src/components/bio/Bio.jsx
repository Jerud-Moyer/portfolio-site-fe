import React from 'react';
import { bio } from '../../data/bio';
import styles from './bio.css';

const Bio = () => {
  return (
    <div className={styles.bio} >
      <h1>A Bit More About Me</h1>
      <h3>{bio}</h3>
      
    </div>
  );
};

export default Bio;
