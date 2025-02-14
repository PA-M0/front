import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>MyApp</Link>
      </div>
      <div className={styles.userActions}>
        <button className={styles.loginButton}>Login</button>
      </div>
    </header>
  );
};

export default Header;
