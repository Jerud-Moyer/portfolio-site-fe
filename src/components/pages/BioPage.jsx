import React from 'react';
import ContactElement from '../contact/ContactElement';
import { bio, bioPics } from '../../data/bio';
import styles from './BioPage.css';
import PictureFlip from '../bio/PictureFlip';

const BioPage = () => {
  return (
    <div className={styles.bioPage} >
      <ContactElement page={'bio'} />
      <PictureFlip />
    </div>
  );
};

export default BioPage;
