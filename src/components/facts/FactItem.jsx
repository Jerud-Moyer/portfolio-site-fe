import React from 'react';
import PropTypes from 'prop-types';
import styles from './FactItem.css';
import { Link } from 'react-router-dom';

const FactItem = ({ text, colorCode, id }) => {
  
  return (
    <Link className={styles.link} to={`/detail/${id}`}>
      <p className={styles[colorCode]}>{text}</p>
    </Link>
  );
};

FactItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  colorCode: PropTypes.string
};

export default FactItem;
