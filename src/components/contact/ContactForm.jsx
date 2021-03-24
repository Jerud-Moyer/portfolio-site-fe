import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import { sendMessage } from '../../services/portfolio-api';
import styles from './ContactForm.css';

const ContactForm = ({ formId }) => {
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const flag = 'This message was sent via jerud-moyer.dev';
  const email = process.env.EMAIL_API;

  const handleSubmit = e => {
    e.preventDefault();
    sendMessage({
      name,
      email,
      senderEmail,
      message,
      flag
    });

    setName('');
    setSenderEmail('');
    setMessage('');
    setMessageSent(true);
  };

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'email') setSenderEmail(target.value);
    if(target.name === 'message') setMessage(target.value);
  };

  return (
    <div className={styles.contact}>
      {messageSent &&
      <h1>Thanks for reaching out!</h1>
      }
      <label
        htmlFor={`form-checkbox${formId}`}
        className={styles.Xbox}
      >X
      </label>
      <input
        type={'checkbox'}
        id={`form-checkbox${formId}`}
        className={styles.checkbox}
      ></input>
      <form
        id={`contact-form${formId}`}
        onSubmit={handleSubmit}
        method={'POST'}
      >
        <input
          type={'text'}
          id={`name${formId}`}
          name={'name'}
          value={name}
          placeholder={'name required'}
          onChange={handleChange}
        />
        <input
          type={'text'}
          id={`email${formId}`}
          name={'email'}
          value={senderEmail}
          placeholder={'email required'}
          onChange={handleChange}
        />
        <textarea
          id={`message${formId}`}
          name={'message'}
          value={message}
          placeholder={'message required'}
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  formId: PropTypes.string.isRequired
};

export default ContactForm;
