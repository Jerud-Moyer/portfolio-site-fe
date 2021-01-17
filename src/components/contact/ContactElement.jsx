import React from 'react';
import email from '../../assets/email.png';
import linkedIn from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import github from '../../assets/github.png';
import resume from '../../assets/pdf-icon.png';
import styles from './ContactElement.css';

const ContactElement = () => {
  return (
    <div className={styles.contactBox}>
      <a href={''}>
        <img className={styles.mediaPic} src={email} alt={'Email'}/>
      </a>
      <a href={''}>
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

export default ContactElement;
