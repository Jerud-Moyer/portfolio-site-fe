import React, { useState } from 'react';
import ContactForm from './ContactForm';
import styles from './ContactModal.css';

const ContactModal = () => {
  const [isActive, setIsActive] = useState(false);


  const handleOpenClick = () => {
    setIsActive(true);
  };

  const handleCloseClick = () => {
    setIsActive(false);
  };
  

  return (
    <div className={styles.modalBox} >
      <button onClick={handleOpenClick} >contact</button>
      <div className={isActive ? styles.bgActive : styles.modalBg}>
        <div className={styles.modal}>
          <p onClick={handleCloseClick} >X</p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
