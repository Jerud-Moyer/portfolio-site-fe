import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { tech } from '../../data/tech-stack.js';
import { useInterval } from '../../hooks/hooks.js';
import TechComponent from './TechComponent';
import styles from './TechComponent.css';

const TechDisplay = () => {
  const [index, setIndex] = useState(0);
  const techType = tech[index];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: .3,
  });

  const delay = inView && (index <= 3)
    ? 6000
    : null;
 
  useInterval(() => {
    setIndex(index => index + 1);
  }, delay);

  return (
    <div ref={ref} >
      { (index <= 3) &&
      <div className={styles.oneTech}> 
        <TechComponent techType={techType} isAnimated={'yes'} />
      </div>
      }
      { (index >= 4) &&
      <div className={inView ? styles.allTech : styles.invisible} >
        
        <TechComponent techType={tech[0]} />
        <TechComponent techType={tech[1]} />
        <TechComponent techType={tech[2]} />
        <TechComponent techType={tech[3]} />
        
      </div>
      }
    </div>
  );
};

export default TechDisplay;
