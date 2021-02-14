import React from 'react';
import FactDisplay from '../facts/FactDisplay';
import ContactElement from '../contact/ContactElement';
import styles from './HomePage.css';
import BulletPointElement from '../bullet-points/BulletPointElement';
import ContactModal from '../contact/ContactModal';

const HomePage = () => {
  return (
    <div className={styles.homePage} >
      <div className={styles.topBox}>
        <div className={styles.infoBox}>
          <h1 className={styles.headline} >Jerud Moyer -Dev</h1>
          <BulletPointElement />
          {/* <ContactModal /> */}
        </div>
        <ContactElement />
      </div>
      <FactDisplay />
    </div>
  );
};

export default HomePage;
