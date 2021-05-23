import React, { useState } from 'react';
import styles from './NavBar.css';

const NavBar = () => {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <div className={styles.navBarOuter} >
      <nav className={styles.navBar} >
        <a href={'#home'}>home</a>
        <a href={'#projects'}>projects</a>
        <a href={'#freelance'}>freelance</a>
        <a href={'#tech'}>tech stack</a>
        <a href={'#about'}>about me</a>
      </nav>
      <div className={styles.mobileNav} >
        {showMobile ?
          <nav 
            className={styles.mobileNavInner}
            onClick={(() => setShowMobile(false))} 
          >
            <p 
              className={styles.xBox} 
              onClick={(() => setShowMobile(false))}
            >X
            </p>
            <nav>
              <a href={'#home'}>home</a>
              <a href={'#projects'}>projects</a>
              <a href={'#freelance'}>freelance</a>
              <a href={'#tech'}>tech stack</a>
              <a href={'#about'}>about me</a>
            </nav>
          </nav>
          : <nav 
            className={styles.hamburger}
            onClick={(() => setShowMobile(true))} 
          >=</nav>}
      </div>
    </div>
  );
};

export default NavBar;
