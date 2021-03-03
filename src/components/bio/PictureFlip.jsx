import React, { useState } from 'react';
import { bioPics } from '../../data/bio';
import styles from './bio.css';

const PictureFlip = () => {
  const [current, setCurrent] = useState(0);
  const length = bioPics.length;

  const handleClickPlus = () => {
    setCurrent((current === length - 1)
      ? 0
      : current + 1);
  };

  const handleClickMinus = () => {
    setCurrent((current === 0)
      ? length - 1
      : current - 1);
   
  };
  

  const indicators = bioPics.map((pic, index) => (
    <div 
      key={pic.imageUrl} 
      className={(index === current) 
        ? styles.indicatorActive
        : styles.indicator}>
    </div>
  ));

  return (
    <div>
      <div className={styles.picFlip} >
        <div className={styles.frame} >
          {bioPics.map((pic, index) => {
            return (
              <div
                key={index}>
                {(index === current) && (
                  <>
                    <img
                      className={(index === current)
                        ? styles.picActive
                        : styles.pic}
                      src={pic.imageUrl}
                      alt={pic.caption}
                    />
                    <h4 
                      className={styles.caption}>
                      {pic.caption}
                    </h4>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <section>
          <div onClick={handleClickMinus}>《</div>
          {indicators}
          <div  onClick={handleClickPlus}>》</div>
        </section>
      </div>
    </div>
  );
};

export default PictureFlip;
