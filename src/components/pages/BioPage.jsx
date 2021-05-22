import React from 'react';
import ContactElement from '../contact/ContactElement';
import styles from './BioPage.css';
import PictureFlip from '../bio/PictureFlip';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';



const BioPage = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: .1,
  });

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div 
      className={styles.bioPage}
      ref={ref} 
    >
      
      {(inView) && 
        <>
          
          <section>
            <div className={styles.contact}>
              <ContactElement page={'bio'} />
            </div>
            <PictureFlip />
            <aside>
              <nav className={styles.nav} >
                <h3>music</h3>
                <a 
                  href="https://dinnerforwolves.bandcamp.com/"
                >Dinner for Wolves
                </a>
                <a 
                  href="https://dirtylowdowns.bandcamp.com/"
                >Dirty Lowdowns
                </a>
              </nav>
              <nav>
                <Link to={'/list'}>random facts about me</Link>
                <div onClick={handleClick}>back to top</div>
              </nav>
            </aside>

          </section>
      
        </>
      }
    </div>
  );
};

export default BioPage;
