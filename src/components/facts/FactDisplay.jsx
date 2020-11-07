import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFacts } from '../../actions/factsActions';
import FactItem from './FactItem';


const FactDisplay = () => {
  const dispatch = useDispatch();
  const facts = useSelector(state => state.facts);
  const loading = useSelector(state => state.loading);

  useEffect(() => {
    dispatch(fetchFacts());
  }, []);

  if(loading) return <h1>Loading.1.2.3.</h1>;

  const randomIndexNum = Math.ceil(Math.random() * 9);
  const randomFact = facts[randomIndexNum];
  
  return (
    <>
      <FactItem
        text={randomFact.text}
        colorCode={randomFact.colorCode}
      />
    </>
  );
};

export default FactDisplay;
