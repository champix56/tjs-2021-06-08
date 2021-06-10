import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ViewerLayout.module.css';
import MemeViewer from '../MemeViewer/MemeViewer';
import { withRouter } from 'react-router-dom';
import store, { initialState, PUBLIC_ACTION_CURRENT } from '../../store/store';
import { Link } from 'react-router-dom';

const ViewerLayout = (props) => {
  let id=props.match.params.memeId;
  const [state, setstate] = useState(initialState.current);
  
  useEffect(() => {
    store.subscribe(()=>setstate(store.getState().meme.current));
    store.dispatch({type:PUBLIC_ACTION_CURRENT.LOAD_CURRENT, value:id})
  }, []);
  return id? (
  <div className={styles.ViewerLayout} data-testid="ViewerLayout">
      <Link to={"/edit/"+id}><MemeViewer meme={{...state,image:store.getState().datas.images.find(e=>e.id===state.imageId)}}/></Link>
  </div>
):null}

ViewerLayout.propTypes = {};

ViewerLayout.defaultProps = {};

export default withRouter(ViewerLayout);
