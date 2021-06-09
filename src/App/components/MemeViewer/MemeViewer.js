import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.css';

const MemeViewer = (props) => (
  <svg className={styles.MemeViewer} data-testid="MemeViewer">
    <image href="" x="0" y="0"/>
    <text x={props.x} y={props.y}>{props.text}</text>
  </svg>
);

MemeViewer.propTypes = {meme:PropTypes.object.isRequired};

export default MemeViewer;
