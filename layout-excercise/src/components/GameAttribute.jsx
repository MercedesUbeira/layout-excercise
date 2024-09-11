import React from 'react';
import styles from './CatapultsGame.module.css';

const GameAttribute = ({ iconSrc, text, alt }) => (
  <div className={styles.gameAttribute}>
    <img loading="lazy" src={iconSrc} alt={alt} className={styles.attributeIcon} />
    <div className={styles.attributeText}>{text}</div>
  </div>
);

export default GameAttribute;