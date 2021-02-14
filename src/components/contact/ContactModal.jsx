import React from 'react';
import ContactForm from './ContactForm';
import styles from './ContactModal.css';

const ContactModal = () => {
  

  return (
    <div className={styles.modalBox} >
      <button>contact</button>
      <div className={styles.modalBg}>
        <div className={styles.modal}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
