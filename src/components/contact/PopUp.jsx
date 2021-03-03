import React from 'react';
import ContactForm from './ContactForm';
import styles from './PopUp.css';
import PropTypes from 'prop-types';

const PopUp = ({ image, formId }) => {
  return (
    <div>
      <div className={styles.popUp}>
        <label htmlFor={`form-checkbox${formId}`}
          className={styles.label} >
          <img
            src={image}
            alt={'email'}
            className={styles.pic}
          />
        </label>
        <input
          type={'checkbox'}
          id={`form-checkbox${formId}`}
          className={styles.toggle}>
        </input>        
        <div className={styles.contain}>
          <div>
          </div>
        </div>
        <div className={styles.form}>
          <div>
            <div>
              <ContactForm formId={formId}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PopUp.propTypes = {
  image: PropTypes.string.isRequired,
  formId: PropTypes.string.isRequired
};

export default PopUp;
