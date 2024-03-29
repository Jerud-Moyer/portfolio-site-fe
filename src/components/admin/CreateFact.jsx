import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createFact, fetchFacts } from '../../actions/factsActions';
import { selectFact } from '../../selectors/factSelectors';
import FactList from '../facts/FactList';

const CreateFact = () => {
  const [type, setType] = useState('');
  const [colorCode, setColorCode] = useState('');
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const dispatch = useDispatch();
  const fact = useSelector(selectFact);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createFact({
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

  useEffect(() => {
    (dispatch(fetchFacts()));
  }, []);

  useEffect(() => { 
    (dispatch(fetchFacts()));
  }, [fact]);

  const handleChange = ({ target }) => {
    if(target.name === 'type') setType(target.value);
    if(target.name === 'colorCode') setColorCode(target.value);
    if(target.name === 'text') setText(target.value);
    if(target.name === 'imageUrl') setImageUrl(target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>add a fact</h2>
        <label htmlFor="fact-type">Fact Type</label>
        <input
          placeholder="personal, professional, memory, or random"
          id="fact-type"
          name="type"
          value={type}
          onChange={handleChange}
        />
        <label htmlFor="fact-color">Fact Color Code</label>
        <input
          placeholder="blue, green, red or yellow"
          id="fact-color"
          name="colorCode"
          value={colorCode}
          onChange={handleChange}
        />
        <label htmlFor="fact-text">Fact Text</label>
        <input
          id="fact-text"
          name="text"
          value={text}
          onChange={handleChange}
        />
        <label htmlFor="fact-imageUrl">Image Url</label>
        <input
          id="fact-imageUrl"
          name="imageUrl"
          value={imageUrl}
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
      <FactList forAdmin={true} />
    </>
  );
};

export default CreateFact;
