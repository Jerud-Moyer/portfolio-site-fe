import React, { useState } from 'react';
import { bioPics } from '../../data/bio';
import styles from './bio.css';

const PictureFlip = () => {
  const [index, setIndex] = useState(0);

  const { imageUrl, caption } = bioPics[index];

  const handleClickPlus = () => {
    (index <= bioPics.length - 2)
      ? setIndex(index => index + 1)
      : setIndex(bioPics.length - 1);
    console.log(index);
  };

  const handleClickMinus = () => {
    (index > 0)
      ? setIndex(index => index - 1)
      : setIndex(0);
    console.log(index);
  };

  return (
    <div className={styles.picFlip} >
      <div>
        <img src={imageUrl} alt={caption}/>
      </div>
      <section>
        <div onClick={handleClickMinus}>《</div>
        <div  onClick={handleClickPlus}>》</div>
      </section>
    </div>
  );
};

export default PictureFlip;
