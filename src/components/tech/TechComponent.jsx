import React from 'react';
import PropTypes from 'prop-types';
import styles from './TechComponent.css';
import { useInView } from 'react-intersection-observer';


const TechComponent = ({ techType, isAnimated }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: .3,
  });

  const type = techType.name;
 
  const techItems = techType.items.map((item, index) => (
    <li
      key={item}
      className={inView
        ? styles[`tech${index}`]
        : styles.invisible}>
      <h2>{item}</h2>
    </li>
  ));

  return (
    <div ref={ref} className={styles.componentBox} >
      {inView &&
      <ul
        className={inView ? styles[`${type}${isAnimated}`]
          : styles.invisible} >
        <li>
          <h1 className={styles.techCategory}>
            {techType.name}
          </h1>
        </li >
        {techItems}
      </ul>
      }
    </div>
  );
};

TechComponent.propTypes = {
  techType: PropTypes.object,
  isAnimated: PropTypes.string
};

export default TechComponent;
