import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';

import  '../../../../node_modules/bootstrap/dist/css/bootstrap.css';



const Navbar = () => (
  <div data-testid="Navbar">
  
<nav  className={styles.Navbar+' navbar navbar-inverse'}>
    <a className="navbar-brand" href="/">Meme.js</a>
    <ul className="nav navbar-nav">
        <li className="active">
            <a href="/thumbnail">Thumbnail</a>
        </li>
        <li>
            <a href="/new">Nouveau meme</a>
        </li>
        <li>
            <a href="/edit/1">Edition meme id:1</a>
        </li>
    </ul>
</nav>
  </div>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
