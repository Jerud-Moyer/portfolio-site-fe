import React, { useState } from 'react';
import { tech } from '../../data/tech-stack.js';
import { useInterval } from '../../hooks/hooks.js';
import TechComponent from './TechComponent';

const TechDisplay = () => {
  const [index, setIndex] = useState(0);
  const techType = tech[index];
 
  useInterval(() => {
    (index > tech.length - 2) ? setIndex(0)
      : setIndex(index => index + 1);
  }, 7000);

  return (
    <div>
      <TechComponent techType={techType} />
    </div>
  );
};

export default TechDisplay;
