import React from 'react';
import styles from './Background.module.css';

const Background = () => {
  return (
    <div className={styles.background}>
      <div className={styles.orange_circle}></div>
      <div className={styles.pink_circle}></div>
    </div>
  )
};

export default Background;