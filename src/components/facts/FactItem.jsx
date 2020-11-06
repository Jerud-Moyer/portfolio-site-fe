import React from 'react';
import PropTypes from 'prop-types';

const FactItem = ({ text, colorCode }) => {

  return (
    <p className={colorCode}>{text}</p>
  );
};

FactItem.propTypes = {
  text: PropTypes.string.isRequired,
  colorCode: PropTypes.string.isRequired
};

export default FactItem;
