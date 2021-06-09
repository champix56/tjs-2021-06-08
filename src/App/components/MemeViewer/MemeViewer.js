import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.css';
import {BASE_IMG_URL} from '../../config/config';
const MemeViewer = (props) => (
  <svg className={styles.MemeViewer} data-testid="MemeViewer" viewBox={'0 0 '+(props.meme.image?`${props.meme.image.w} ${props.meme.image.h}`:'1000 1000')} >
    {props.meme.image && <image href={`${BASE_IMG_URL}${props.meme.image.url}`} x="0" y="0"/>}
    <text x={props.meme.x} y={props.meme.y}>{props.meme.text}</text>
  </svg>
);

MemeViewer.propTypes = {meme:PropTypes.object.isRequired};

export default MemeViewer;
