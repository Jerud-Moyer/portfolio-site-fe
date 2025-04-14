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
  const eskart = proProjects[2];
  
  
  useInterval(() => {
    (trigger <= 6 && inView)
      ? setTrigger(trigger + 1)
      : setTrigger(0);
  }, 1500);
   
  
  const [ref, inView] = useInView({
    threshold: .3
  })
  const [refA, inViewA] = useInView({
    // triggerOnce: true,
    threshold: .3,
  });
  const [refB, inViewB] = useInView({
    // triggerOnce: true,
    threshold: .3,
  });
  const [refC, inViewC] = useInView({
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
        <div 
          ref={refA} 
          className={inViewA ? styles.workBox : styles.hidden}
        >
          <h1
            className={styles.subHeadline}
          >{amphead.name}
          </h1>
          <div   className={styles.picBox}>
            <img
              className={inViewA ? styles.workPic : styles.hidden}
              src={amphead.imgUrl}/>
            <p className={styles.workDescription}>{amphead.description}</p>
            <a href={amphead.siteLink}>visit the site</a>
            <a href={amphead.gitLink}>git repo</a>
          </div>
        </div>
        <div 
          ref={refB} 
          className={inViewB ? styles.workBox2 : styles.hidden}
        >
          <div className={styles.picBox}>
            <img
              className={inViewB ? styles.workPic : styles.hidden}
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
        <div 
          ref={refC} 
          className={inViewC ? styles.workBox3 : styles.hidden}
        >
          <h1
            className={styles.subHeadline}
          >{eskart.name}
          </h1>
          <div   className={styles.picBox}>
            <img
              className={inViewC ? styles.workPic : styles.hidden}
              src={eskart.imgUrl}/>
            <p className={styles.workDescription}>{eskart.description}</p>
            <a href={eskart.siteLink}>visit the site</a>
            <a href={eskart.gitLink}>git repo</a>
          </div>
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
