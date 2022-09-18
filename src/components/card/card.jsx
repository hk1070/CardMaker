import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';

const Card = ({ card }) => {
  const { name, company, theme, title, email, message, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.avatar} src={url} alt='profile' />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case 'mint':
      return styles.mint;
    case 'wheat':
      return styles.wheat;
    case 'yellow':
      return styles.yellow;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
