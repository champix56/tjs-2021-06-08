import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.Footer} data-testid="Footer">
    Copyright &copy; 2021 - orsys
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
