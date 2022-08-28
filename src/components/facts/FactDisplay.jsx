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
  const [factIndexes, setFactIndexes] = useState([]);

  const resetFacts = () => {
    let factsNum = facts.length - 1;
    const indexesArr = [];
    
    while(factsNum >= 0) {
      indexesArr.push(factsNum);
      factsNum -= 1;
    }
    setFactIndexes(indexesArr);
  };

  useEffect(() => {
    dispatch(fetchFacts()); 
  }, []);
  
  useEffect(() => {
    resetFacts();
  }, [facts]);
  
  useInterval(() => {
    if(factIndexes.length) {
      const randomIndexNum = Math.floor(Math.random() * factIndexes.length);
      const factIndex = factIndexes[randomIndexNum];
      setRandomFact(facts[factIndex]);
      setFactIndexes(factIndexes.filter(i => i !== factIndex));
    }
    if(factIndexes.length == 1) {
      resetFacts();
    }
  }, 5000);
  
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
