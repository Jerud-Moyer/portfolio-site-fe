import React from 'react';
import FactDisplay from '../facts/FactDisplay';
import ContactElement from '../contact/ContactElement';
import styles from './HomePage.css';
import BulletPointElement from '../bullet-points/BulletPointElement';


const HomePage = () => {
  return (
    <div className={styles.homePage} >
      <div className={styles.topBox}>
        <div className={styles.infoBox}>
          <h1 className={styles.headline} >Jerud Moyer -Dev</h1>
          <BulletPointElement />
        </div>
        <ContactElement page={'home-page'}/>
      </div>
      <FactDisplay />
    </div>
  );
};

export default HomePage;
