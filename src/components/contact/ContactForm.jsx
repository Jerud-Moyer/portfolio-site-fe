import React, { useState } from 'react';
import { sendMessage } from '../../services/portfolio-api';
import styles from './ContactForm.css';

const ContactForm = () => {
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
      <label htmlFor={'checkbox'} className={styles.Xbox}>X</label>
      <input
        type={'checkbox'}
        id={'checkbox'}
        className={styles.checkbox}
      ></input>
      <form
        id={'contact-form'}
        onSubmit={handleSubmit}
        method={'POST'}
      >
        <input
          type={'text'}
          id={'name'}
          name={'name'}
          value={name}
          placeholder={'name required'}
          onChange={handleChange}
        />
        <input
          type={'text'}
          id={'email'}
          name={'email'}
          value={email}
          placeholder={'email required'}
          onChange={handleChange}
        />
        <textarea
          id={'message'}
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

export default ContactForm;
