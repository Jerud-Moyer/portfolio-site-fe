import React from 'react';
import styles from './NavBar.css';

const NavBar = () => {
  return (
    <div className={styles.navBar} >
      <a href={'#home'}>home</a>
      <a href={'#projects'}>projects</a>
      <a href={'#freelance'}>freelance</a>
      <a href={'#tech'}>tech stack</a>
      <a href={'#about'}>about me</a>
    </div>
  );
};

export default NavBar;
