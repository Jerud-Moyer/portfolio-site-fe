import React, { useState } from 'react';
import email from '/public/assets/email-ebony.png';
import linkedIn from '/public/assets/linkedin-ebony.png';
import twitter from '/public/assets/twitter-ebony.png';
import github from '/public/assets/github-ebony.png';
import resume from '/public/assets/pdf-icon-ebony.png';
import styles from './ContactElement.css';
import PopUp from './PopUp';
import { PropTypes } from 'prop-types';
import { useInterval } from '../../hooks/hooks';


const ContactElement = ({ page }) => {
  const [trigger, setTrigger] = useState(0);
  
  useInterval(() => {
    (trigger <= 20) 
      ? setTrigger(trigger + 1)
      : setTrigger(0);
  }, 1000);

  return (
    <div className={styles.contactBox}>
      <div className={styles.elementBox} >
        {page === 'home-page' &&
          <p 
            className={trigger === 2 
              ? styles.elementTag 
              : styles.invisible} 
          > {'contact me =>'}
          </p>
        }
        <div className={styles.popUpInner} >
          <PopUp image={email} formId={page}/>
        </div>
      </div>

      <div className={styles.elementBox} >
        {page === 'home-page' &&
            <p 
              className={trigger === 3
                ? styles.elementTag
                : styles.invisible} 
            >{'my resume =>'}
            </p>
        }
        <a
          href={'/assets/jerud-moyer-resume.pdf'}
          target={'blank'}
        >
          <img className={styles.mediaPic} src={resume} alt={'PDF'}/>
        </a>
      </div>

      {/* <div className={styles.elementBox}>
        {page === 'home-page' &&
            <p 
              className={trigger === 4 
                ? styles.elementTag
                : styles.invisible} 
            >{'Twitter =>'}
            </p>
        }
        <a
          href={'https://twitter.com/Jerud7'}
          target={'blank'}
        >
          <img className={styles.mediaPic} src={twitter} alt={'Twitter'}/>
        </a>
      </div> */}

      <div className={styles.elementBox}>
        {page === 'home-page' &&
            <p 
              className={trigger === 4
                ? styles.elementTag
                : styles.invisible} 
            >{'LinkedIn =>'}
            </p>
        }
        <a
          href={'https://www.linkedin.com/in/jerud-moyer/'}
          target={'blank'}
        >
          <img className={styles.mediaPic} src={linkedIn} alt={'LinkedIn'}/>
        </a>
      </div>

      <div className={styles.elementBox}>
        {page === 'home-page' &&
            <p 
              className={trigger === 5
                ? styles.elementTag
                : styles.invisible} 
            >{'Github =>'}
            </p>
        }
        <a
          href={'https://github.com/Jerud-Moyer'}
          target={'blank'}
        >
          <img className={styles.mediaPic} src={github} alt={'GitHub'}/>
    
        </a>
      </div>
    </div>
  );
};

ContactElement.propTypes = {
  page: PropTypes.string.isRequired
};

export default ContactElement;
