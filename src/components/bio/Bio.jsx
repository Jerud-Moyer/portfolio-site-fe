import React from 'react';
import { useInView } from 'react-intersection-observer';
import { bio } from '../../data/bio';
import styles from './bio.css';

const Bio = () => {
  const [ref, inView] = useInView({
    threshold: .4
  });

  return (
    <div className={styles.bio} ref={ref} >
      {(inView) &&
      <>
        <h1>A Bit More About Me</h1>
        <div>
          <p>｛</p>
          <h3 className={styles.bioText} >{bio}</h3>
          <p>｝</p>
        </div>
      </>
      }
    </div>
  );
};

export default Bio;
