import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { proProjects } from '../../data/proProjects';
import { useInterval } from '../../hooks/hooks';
import ScrollArrow from '../scroll-arrow/ScrollArrow';
import styles from './RecentWork.css';


const RecentWork = () => {
  const [trigger, setTrigger] = useState(0);
  const amphead = proProjects[0];
  const albano = proProjects[1];
  
  
  useInterval(() => {
    (trigger <= 6 && inView)
      ? setTrigger(trigger + 1)
      : setTrigger(0);
  }, 1500);
   
  
  
  const [ref, inView] = useInView({
    // triggerOnce: true,
    threshold: .3,
  });

  return (
    
    <div
      ref={ref}
      className={styles.bigBox}>
      {inView &&
      <>
        <h1
          className={styles.proHeadline} 
        >Freelance Work
        </h1>
        <div className={styles.services}>
          <h3 className={trigger === 2
            ? styles.bulletPoint
            : styles.invisible}
          >if you want to . . .
          </h3>
          <h4 className={trigger === 3
            ? styles.bulletPoint
            : styles.invisible}
          >expand your digital brand,
          </h4>
          <h4 className={trigger === 4
            ? styles.bulletPoint
            : styles.invisible}
          >manage your data,
          </h4>
          <h4 className={trigger === 5
            ? styles.bulletPoint
            : styles.invisible}
          >or build a cool app,
          </h4>
          <h3 className={trigger === 6
            ? styles.bulletPoint
            : styles.invisible}
          >. . . I can help.
          </h3>
        </div>
        <div className={styles.workBox}>
          <h1
            className={styles.subHeadline}
          >{amphead.name}
          </h1>
          <div   className={styles.picBox}>
            <img
              className={inView ? styles.workPic : styles.hidden}
              src={amphead.imgUrl}/>
            <p className={styles.workDescription}>{amphead.description}</p>
            <a href={amphead.siteLink}>visit the site</a>
            <a href={amphead.gitLink}>git repo</a>
          </div>
        </div>
        <div className={styles.workBox2}>
          <div className={styles.picBox}>
            <img
              className={inView ? styles.workPic : styles.hidden}
              src={albano.imgUrl}/>
            <p className={styles.workDescription}>{albano.description}</p>
            <a href={albano.siteLink}>visit the site</a>
            <a href={albano.gitLink}>git repo</a>
          </div>
          <h1
            className={styles.subHeadline2}
          >{albano.name}
          </h1>
        </div>
        <div className={styles.arrowBox}>
          <ScrollArrow />
        </div>
      </>
      }
    </div>
    
  );
};

export default RecentWork;
