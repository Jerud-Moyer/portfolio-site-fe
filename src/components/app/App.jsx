import React from 'react';
import FactDisplay from '../facts/FactDisplay';
import styles from './app.css';

export default function App() {
  return (
    <div className={styles.view}>
      <FactDisplay />;
    </div>
  );
}
