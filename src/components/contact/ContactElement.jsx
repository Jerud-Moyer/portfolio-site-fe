import React from 'react';
import email from '../../assets/email-ebony.png';
import linkedIn from '../../assets/linkedin-ebony.png';
import twitter from '../../assets/twitter-ebony.png';
import github from '../../assets/github-ebony.png';
import resume from '../../assets/pdf-icon-ebony.png';
import styles from './ContactElement.css';
import PopUp from './PopUp';
import { PropTypes } from 'prop-types';

const ContactElement = ({ page }) => {
  return (
    <div className={styles.contactBox}>
      <div className={styles.popUpBox} >
        <PopUp image={email} formId={page}/>
      </div>
      <a href={'./public/Jerud moyer (6) (1).pdf'}>
        <img className={styles.mediaPic} src={resume} alt={'PDF'}/>
      </a>
      <a href={'https://twitter.com/Jerud7'}>
        <img className={styles.mediaPic} src={twitter} alt={'Twitter'}/>
      </a>
      <a href={'https://www.linkedin.com/in/jerud-moyer/'}>
        <img className={styles.mediaPic} src={linkedIn} alt={'LinkedIn'}/>
      </a>
      <a href={'https://github.com/Jerud-Moyer'}>
        <img className={styles.mediaPic} src={github} alt={'GitHub'}/>
      </a>
      
    </div>
  );
};

ContactElement.propTypes = {
  page: PropTypes.string.isRequired
};

export default ContactElement;
