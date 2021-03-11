import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFact, changeFact } from '../../actions/factsActions';
import { selectFact } from '../../selectors/factSelectors';
import { Link, useParams } from 'react-router-dom';
import styles from './admin.css';

const UpdateFact = () => {
  const fact = useSelector(selectFact);
  const { id } = useParams();
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchFact(id));
  }, []);

  useEffect(() => {
    setType(fact.type);
    setColorCode(fact.colorCode);
    setText(fact.text);
    setImageUrl(fact.imageUrl);
  }, [fact]);

  const [type, setType] = useState(fact.type);
  const [colorCode, setColorCode] = useState(fact.colorCode);
  const [text, setText] = useState(fact.text);
  const [imageUrl, setImageUrl] = useState(fact.imageUrl);

  const handleChange = ({ target }) => {
    if(target.name === 'type') setType(target.value);
    if(target.name === 'colorCode') setColorCode(target.value);
    if(target.name === 'text') setText(target.value);
    if(target.name === 'imageUrl') setImageUrl(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(changeFact(id, {
      type,
      colorCode,
      text,
      imageUrl
    }));
    setType('');
    setColorCode('');
    setText('');
    setImageUrl('');
    
  };


  return (
    <div className={styles.updateBox} >
      <h2>update a fact</h2>
      <h2>{fact.type}</h2>
      <h3>colorCode:</h3>
      <h2>{fact.colorCode}</h2>
      <h2>{fact.text}</h2>
      <img src={fact.imageUrl} alt={fact.text}/>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fact-type">Fact Type</label>
        <input
          placeholder={fact.type}
          id="fact-type"
          name="type"
          value={type}
          onChange={handleChange}
        />
        <label htmlFor="fact-color">Fact Color Code</label>
        <input
          className={styles[fact.colorCode]}
          placeholder={fact.colorCode}
          id="fact-color"
          name="colorCode"
          value={colorCode}
          onChange={handleChange}
        />
        <label htmlFor="fact-text">Fact Text</label>
        <input
          placeholder={fact.text}
          id="fact-text"
          name="text"
          value={text}
          onChange={handleChange}
        />
        <label htmlFor="fact-imageUrl">Image Url</label>
        <input
          placeholder={fact.imageUrl}
          id="fact-imageUrl"
          name="imageUrl"
          value={imageUrl}
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
      <Link to={'/admin'}>
        <button>admin home</button>
      </Link>
    </div>
  );
};

export default UpdateFact;
