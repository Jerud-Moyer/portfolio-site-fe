import React from 'react';
import PropTypes from 'prop-types';
import styles from './FactItem.css';

const FactItem = ({ text, colorCode }) => {
  
  return (
    <p className={styles[colorCode]}>{text}</p>
  );
};

FactItem.propTypes = {
  text: PropTypes.string.isRequired,
  colorCode: PropTypes.string.isRequired
};

export default FactItem;
