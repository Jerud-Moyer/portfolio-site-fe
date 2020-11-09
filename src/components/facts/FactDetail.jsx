import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFact } from '../../actions/factsActions';
import { selectFact } from '../../selectors/factSelectors';
import { useParams } from 'react-router-dom';
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
    </div>
  );
};

export default FactDetail;
