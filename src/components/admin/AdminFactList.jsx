import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchFacts,
  removeFact
} from '../../actions/factsActions';
import { selectFacts } from '../../selectors/factSelectors';

const FactList = () => {
  const facts = useSelector(selectFacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFacts());
  }, []);
  
  const handleDelete = ({ target }) => {
    dispatch(removeFact(target.value));
  };

  
  const factElements = facts.map(fact => (
    <li key={fact.id}>
      <Link to={`/detail/${fact.id}`}><p>{fact.text}</p></Link>
      <Link to={`/UpdateFact/${fact.id}`}>
        <button>update</button>
      </Link>
      <button value={fact.id} onClick={handleDelete}>delete fact</button>
      

    </li>
  ));

  return (
    <ul data-testid="facts">
      {factElements}
    </ul>
  );

};

export default FactList;
