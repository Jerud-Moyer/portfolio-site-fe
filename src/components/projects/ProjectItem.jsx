import React from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import styles from './ProjectItem.css';

const ProjectItem = ({ 
  name, 
  imgUrl, 
  siteLink, 
  gitLink,
  downloadLink,
  mobile,
  description 
}) => {

  const [ref, inView] = useInView({
    // triggerOnce: true,
    threshold: .6,
  });

  return (
    <div
      className={inView
        ? styles.projectItem
        : styles.invisible
      }
      
    >
      
      <h2 className={styles.name}>{name}</h2>
      
      {!mobile &&
      <img
        className={inView
          ? styles.projectPicInView
          : styles.projectPic
        }
        ref={ref}
        src={imgUrl} 
        alt={name}
      />
      }
      {mobile &&
      <img
        className={inView
          ? styles.mobileProjectPic
          : styles.projectPic
        }
        ref={ref}
        src={imgUrl} 
        alt={name}
      />
      }
      <p className={styles.description}> 
        {description} 
      </p>
      {siteLink &&
        <a
          className={styles.siteLink}
          href={siteLink}
        >
          {`Visit ${name}`}
        </a>
      }
      {downloadLink &&
        <a
          className={styles.downloadLink}
          href={downloadLink}
          download
        >
          {`Download ${name}
          for Android`} 
        </a>
      }
      <a
        className={styles.gitLink}
        href={gitLink}
      >
        Git Repo
      </a>
     
    </div>
  );
};



ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  siteLink: PropTypes.string.isRequired,
  gitLink: PropTypes.string.isRequired,
  downloadLink: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mobile: PropTypes.bool
};

export default ProjectItem;
