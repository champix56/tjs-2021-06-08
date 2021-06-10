import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.Header} data-testid="Header">
    <span className={styles.orange}>Memes</span>.<span className={styles.blue+' '+styles.italic}>JS</span>
  </div>
);

export default Header;
