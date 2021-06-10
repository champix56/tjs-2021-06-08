import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import {
Link
} from 'react-router-dom'

import  '../../../../node_modules/bootstrap/dist/css/bootstrap.css';



const Navbar = () => (
<nav  data-testid="Navbar" className={styles.Navbar+' navbar navbar-inverse'}>
    <Link className="navbar-brand" to="/">Meme.js</Link>
    <ul className="nav navbar-nav">
        <li className="active">
            <Link to="/thumbnail">Thumbnail</Link>
        </li>
        <li>
            <Link to="/new">Nouveau meme</Link>
        </li>
        <li>
            <Link to="/edit/2">Edition meme id:2</Link>
        </li>
    </ul>
</nav>);

export default Navbar;
