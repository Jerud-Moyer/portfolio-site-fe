import React from 'react';
import FactDisplay from '../facts/FactDisplay';
import ContactElement from '../contact/ContactElement';
import styles from './HomePage.css';
import BulletPointElement from '../bullet-points/BulletPointElement';
import ScrollArrow from '../scroll-arrow/ScrollArrow';


const HomePage = () => {
  return (
    <div 
      className={styles.homePage} 
      id={'home'}
    >
      <div className={styles.topBox}>
        <div className={styles.infoBox}>
          <h1 className={styles.headline} >Jerud Moyer</h1>
          <BulletPointElement />
        </div>
        <ContactElement page={'home-page'}/>
      </div>
      {/* <div className={styles.factBox}>
        <FactDisplay />
      </div> */}
      <div className={styles.arrowBox} >
        <ScrollArrow/>
      </div>    
    </div>
  );
};

export default HomePage;
