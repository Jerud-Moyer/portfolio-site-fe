import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFacts } from '../../actions/factsActions';
import { useInterval } from '../../hooks/hooks';
import FactItem from './FactItem';
import styles from './FactItem.css';


const FactDisplay = () => {
  const dispatch = useDispatch();
  const facts = useSelector(state => state.facts);
  const [randomFact, setRandomFact] = useState({});
  
  useInterval(() => {
    const randomIndexNum = Math.floor(Math.random() * facts.length);
    setRandomFact(facts[randomIndexNum]);
  }, 5000);
  
  
  useEffect(() => {
    dispatch(fetchFacts());
  }, []);
  
  
  return (
    <div className={styles.fact}>
      {randomFact &&
      <FactItem
        id={randomFact.id}
        text={randomFact.text}
        colorCode={randomFact.colorCode}
      />
      }
    </div>
  );
};

export default FactDisplay;
