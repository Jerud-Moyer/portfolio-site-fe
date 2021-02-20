import React from 'react';
import PropTypes from 'prop-types';
import styles from './TechComponent.css';


const TechComponent = ({ techType }) => {
  const type = techType.name;
  console.log(type);
  const techItems = techType.items.map((item, index) => (
    <li key={item} className={styles[`tech${index}`]}>
      <h2>{item}</h2>
    </li>
  ));

  return (
    <div >
      <ul className={styles[type]} >
        <li ><h1>
          {techType.name}
        </h1>
        </li>
        {techItems}
      </ul>
    </div>
  );
};

TechComponent.propTypes = {
  techType: PropTypes.object
};

export default TechComponent;
