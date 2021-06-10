import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
import { REST_ADR_SRV } from '../../config/config';
import store, { initialState, PUBLIC_ACTION_CURRENT } from '../../store/store';
const MemeForm = (props) => {
  const [state, setstate] = useState(initialState.current);
  useEffect(() => {
    setstate(store.getState().current)
    store.subscribe(()=>{
      setstate(store.getState().current)
    })
  }, []);
  useEffect(() => {
    //appele de la func prent envoyé par les props
    store.dispatch({type:PUBLIC_ACTION_CURRENT.SET_CURRENT,value:state})
  }, [state]);

  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form onSubmit={(evt) => {
        //annulation du comportement par def. de la soumission d'un formulaire
        evt.preventDefault();
        store.dispatch({type:PUBLIC_ACTION_CURRENT.SAVE_CURRENT});
      }}>
        <label htmlFor="titre">Titre</label><br /><input onChange={evt => {
          setstate({ ...state, titre: evt.target.value });
        }} value={state.titre} type="text" id="titre" placeholder="saisissez le titre" />
        <hr />
        <label htmlFor="image">image</label><br />

        <select onChange={evt => {
          setstate({ ...state, imageId: Number(evt.target.value) });
        }} value={state.imageId} id="image">
          {
            props.images.map((element, index) => <option value={element.id} key={"option-image-" + index} >{element.title}</option>)
          }
        </select>


        <hr />
        <label htmlFor="text">Texte</label><br /><input type="text" id="text" onChange={evt => {
          setstate({ ...state, text: evt.target.value });
        }} value={state.text} />
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block' }}><label htmlFor="x">X </label><br /><input onChange={evt => {
            setstate({ ...state, x: evt.target.value });
          }} value={state.x} type="number" id="x" /></div>
          <div style={{ display: 'inline-block' }}><label htmlFor="y">Y</label><br /><input onChange={evt => {
            setstate({ ...state, y: evt.target.value });
          }} value={state.y} type="number" id="y" /></div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block' }}><label htmlFor="fsize">font-size </label><br /><input onChange={evt => {
            setstate({ ...state, fsize: Number(evt.target.value) });
          }} value={state.fsize} type="number" id="fsize" /></div>
          <div style={{ display: 'inline-block' }}>
            <label htmlFor="color">color </label><br />
            <input onChange={evt => {
              setstate({ ...state, color: evt.target.value });
            }} value={state.color} type="color" id="color" />
          </div>
        </div>
        <hr />
        <input type="submit" value="submit" />
        <input type="reset" value="reset" />

      </form>
    </div>
  );
}

MemeForm.propTypes = {
  // onSubmit: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired
};



export default MemeForm;
