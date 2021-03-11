import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFact } from '../../actions/factsActions';
import { selectFact } from '../../selectors/factSelectors';
import { Link, useParams } from 'react-router-dom';
import styles from './FactDetail.css';

const FactDetail = () => {
  const fact = useSelector(selectFact);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFact(id));
  }, []);

  return (
    <div className={styles.detailBox}>
      <h3>a {fact.type} fact about me:</h3>
      <h1 className={styles[fact.colorCode]}>{fact.text}</h1>
      <img src={fact.imageUrl}/>
      <nav>
        <Link to={'/list'}>more facts about me</Link>
        <Link to={'/'}>home</Link>
      </nav>
    </div>
  );
};

export default FactDetail;
