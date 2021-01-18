import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectItem.css';

const ProjectItem = ({ name, imgUrl, siteLink, gitLink, description }) => {
  return (
    <div  className={styles.projectItem}>
      <h2 className={styles.name}>{name}</h2>
      <img className={styles.projectPic} src={imgUrl} alt={name}/>
      <p className={styles.description} >{description}</p>
      <a className={styles.siteLink} href={siteLink}>{`Visit ${name}`}</a>
      <a className={styles.gitLink} href={gitLink}>Git Repo</a>
    </div>
  );
};

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  siteLink: PropTypes.string.isRequired,
  gitLink: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ProjectItem;
