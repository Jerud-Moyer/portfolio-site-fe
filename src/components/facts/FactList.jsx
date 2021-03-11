import { PropTypes } from 'prop-types';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchFacts,
  removeFact
} from '../../actions/factsActions';
import { selectFacts, selectLoading } from '../../selectors/factSelectors';
import styles from './FactList.css';

const FactList = ({ forAdmin }) => {
  const facts = useSelector(selectFacts);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchFacts());
  }, []);

  const handleDelete = ({ target }) => {
    dispatch(removeFact(target.value));
    dispatch(fetchFacts());
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  
  const factElements = (loading) ? <h1>...Loading</h1>
    : facts.map(fact => (
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
    <>
      {!forAdmin &&
    <h1 className={styles.factsHeadline} 
    >Some random facts about me...
    </h1>
      }
      <ul data-testid="facts">
        {factElements}
      </ul>
      <div className={styles.scrollTop} onClick={handleClick} >back to top</div>
      <Link to={'/'} className={styles.homeLink}>home</Link>
    </>
  );

};

FactList.propTypes = {
  forAdmin: PropTypes.bool
};

export default FactList;
