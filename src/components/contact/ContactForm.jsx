import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import { sendMessage } from '../../services/portfolio-api';
import styles from './ContactForm.css';

const ContactForm = ({ formId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    sendMessage({
      name,
      email,
      message
    });

    setName('');
    setEmail('');
    setMessage('');
  };

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'message') setMessage(target.value);
  };

  return (
    <div className={styles.contact}>
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
          value={email}
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
