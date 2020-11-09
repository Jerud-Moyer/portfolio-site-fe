import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFact, changeFact } from '../../actions/factsActions';
import { selectFact } from '../../selectors/factSelectors';
import { useParams } from 'react-router-dom';

const UpdateFact = () => {
  const fact = useSelector(selectFact);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchFact(id));
  }, []);

  const [type, setType] = useState('');
  const [colorCode, setColorCode] = useState('');
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const dispatch = useDispatch();

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
    <div>
      <h2>update a fact</h2>
      <h3>type:</h3>
      <h2>{fact.type}</h2>
      <h3>colorCode:</h3>
      <h2>{fact.colorCode}</h2>
      <h3>text:</h3>
      <h2>{fact.text}</h2>
      <h3>image url:</h3>
      <h2>{fact.imageUrl}</h2>
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
    </div>
  );
};

export default UpdateFact;
