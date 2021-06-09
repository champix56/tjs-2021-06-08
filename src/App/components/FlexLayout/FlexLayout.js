import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexLayout.module.css';

const FlexLayout = (props) => (
  <div className={styles.FlexLayout} data-testid="FlexLayout">
    {props.children}
  </div>
);

FlexLayout.propTypes = {children:PropTypes.array.isRequired};

export default FlexLayout;
