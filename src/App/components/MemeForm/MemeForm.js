import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';

const MemeForm = (props) => (
  <div className={styles.MemeForm} data-testid="MemeForm">
    <form>
      <label for="titre">Titre</label><br /><input type="text" id="titre" placeholder="saisissez le titre" />
      <hr />
      <label for="image">image</label><br /><select id="image"><option value="1">img.jpg</option></select>
      <hr />
      <label for="text">Texte</label><br /><input type="text" id="text" />
      <div style={{ textAlign: 'center' }}>
        <div style={{ display: 'inline-block' }}><label for="x">X </label><br /><input type="number" id="x" /></div>
        <div style={{ display: 'inline-block' }}><label for="y">Y</label><br /><input type="number" id="y" /></div>
      </div>
      <hr />
      <input type="submit">Save</input>
      <input type="reset">Reset</input>

    </form>
  </div>
);

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
