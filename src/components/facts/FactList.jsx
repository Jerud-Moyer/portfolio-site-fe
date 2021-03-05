import { PropTypes } from 'prop-types';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchFacts,
  removeFact
} from '../../actions/factsActions';
import { selectFacts } from '../../selectors/factSelectors';
import styles from './FactList.css';

const FactList = ({ forAdmin }) => {
  const facts = useSelector(selectFacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFacts());
  }, []);
  
  const handleDelete = ({ target }) => {
    dispatch(removeFact(target.value));
  };

  
  const factElements = facts.map(fact => (
    <li key={fact.id} className={styles.fact} >
      <Link to={`/detail/${fact.id}`} className={styles.factLink} >
        <div className={styles[fact.colorCode]}>
          <img src={fact.imageUrl} alt={fact.text} />
          <p>{fact.text}</p>
        </div>
      </Link>
      {forAdmin &&
      <>
        <Link to={`/UpdateFact/${fact.id}`}>
          <button>update</button>
        </Link>
        <button value={fact.id} onClick={handleDelete}>delete fact</button>
      </>
      }
    </li>
  ));

  return (
    <ul data-testid="facts">
      {factElements}
    </ul>
  );

};

FactList.propTypes = {
  forAdmin: PropTypes.boolean
};

export default FactList;
