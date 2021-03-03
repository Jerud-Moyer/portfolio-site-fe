import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFacts } from '../../actions/factsActions';
import { selectFacts } from '../../selectors/factSelectors';

const FactList = () => {
  const facts = useSelector(selectFacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFacts());
  }, []);

  const factElements = facts.map(fact => (
    <li key={fact.id}>
      <Link to={`/detail/${fact.id}`}><p>{fact.text}</p></Link>
      
    </li>
  ));

  return (
    <ul data-testid="facts">
      {factElements}
    </ul>
  );

};

export default FactList;
