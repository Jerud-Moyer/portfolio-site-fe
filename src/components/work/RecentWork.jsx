import React from 'react';
import { useInView } from 'react-intersection-observer';
import { proProjects } from '../../data/proProjects';
import styles from './RecentWork.css';
import ContactElement from '../contact/ContactElement';


const RecentWork = () => {
  const amphead = proProjects[0];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshhold: .3,
  });

  return (
    <div className={styles.bigBox}>
      <h1
        className={inView ? styles.proHeadline : styles.proHeadlineHidden}
        ref={ref} 
      >Professional Work
      </h1>
      <div
        className={inView ? styles.workBox : null}
        ref={ref}>
        {/* <ContactElement className={styles.contact} /> */}
        <h1
          className={inView ? styles.subHeadline : null}
        >{amphead.name}
        </h1>
        <div className={styles.picBox}>
          <img className={inView ? styles.workPic : null}
            src={amphead.imgUrl}/>
          <p className={styles.workDescription}>{amphead.description}</p>
          <a href={amphead.siteLink}>visit amphead.com</a>
          <a href={amphead.gitLink}>git repo</a>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
