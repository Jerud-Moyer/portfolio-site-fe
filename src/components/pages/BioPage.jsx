import React from 'react';
import ContactElement from '../contact/ContactElement';
import styles from './BioPage.css';
import PictureFlip from '../bio/PictureFlip';
import { useInView } from 'react-intersection-observer';
import FactDisplay from '../facts/FactDisplay';

const BioPage = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: .1,
  });

  return (
    <div className={styles.bioPage} ref={ref} >
      {(inView) && 
        <>
          
          <section>
            <div className={styles.contact}>
              <ContactElement page={'bio'} />
            </div>
            <PictureFlip />
            <aside>
              <h3>music</h3>
              <a 
                href="https://dinnerforwolves.bandcamp.com/"
              >Dinner for Wolves
              </a>
              <a 
                href="https://dirtylowdowns.bandcamp.com/"
              >Dirty Lowdowns
              </a>
            </aside>

          </section>
          <FactDisplay />
        </>
      }
    </div>
  );
};

export default BioPage;
