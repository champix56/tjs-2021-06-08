import { combineReducers, createStore } from 'redux';
import { REST_ADR_SRV } from '../config/config';
export const initialState = {
    current: { titre: '', x: 10, y: 20, text: 'coucou', imageId: 2, color: '#000000', fsize: 15 }
}
export const PUBLIC_ACTION_CURRENT = Object.freeze({
    SET_CURRENT: 'SET_CURRENT',
    SAVE_CURRENT: 'SAVE_CURRENT',
    LOAD_CURRENT: 'LOAD_CURRENT',
    CLEAR_CURRENT: 'CLEAR_CURRENT'
});
export const globalInitialState = {
    images: [],
    memes: []
}
export const PUBLIC_ACTION_GLOBAL = Object.freeze({
    INITIAL_LOAD: 'INITIAL_LOAD',
    UPDATE_IMAGE_LIST: 'UPDATE_IMAGE_LIST',
    UPDATE_MEME_LIST: 'UPDATE_MEME_LIST',
});
/**
 * reducer pour les listes de datas
 * @param {object} state etat actuel à moddif
 * @param {object} action type et value(s) pour la modif d'etat du reducer
 * @returns nouvel etat du reducer
 */
const globalReducer = (state = globalInitialState, action) => {
    console.log(state);
const typeAction=(action.type.includes('@@redux/INIT')?PUBLIC_ACTION_GLOBAL.INITIAL_LOAD:action.type)
    switch (typeAction) {
        case PUBLIC_ACTION_GLOBAL.INITIAL_LOAD:
            fetch(`${REST_ADR_SRV}/images`)
                .then(flux => flux.json())
                .then(arr => store.dispatch({type:PUBLIC_ACTION_GLOBAL.UPDATE_IMAGE_LIST,values:arr}));
                fetch(`${REST_ADR_SRV}/memes`)
                .then(flux => flux.json())
                .then(arr => store.dispatch({type:PUBLIC_ACTION_GLOBAL.UPDATE_MEME_LIST,values:arr}));
            return state;
        case PUBLIC_ACTION_GLOBAL.UPDATE_MEME_LIST:
            return {...state,memes:action.values};
        case PUBLIC_ACTION_GLOBAL.UPDATE_IMAGE_LIST:
            return {...state,images:action.values};
        default:
            return state
    }
};

/**
 * reducer pour le current meme
 * @param {object} state etat actuel
 * @param {object} action action du reducer 
 * @returns nouvel etat nom muté
 */
const currentReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case PUBLIC_ACTION_CURRENT.SET_CURRENT:
            return { ...state, current: action.value };
        case PUBLIC_ACTION_CURRENT.CLEAR_CURRENT:
            return { ...initialState };

        /* appel reseaux async */
        case PUBLIC_ACTION_CURRENT.LOAD_CURRENT:
            fetch(`${REST_ADR_SRV}/memes/${action.value}`)
                .then(flux => flux.json())
                .then(obj => { store.dispatch({ type: PUBLIC_ACTION_CURRENT.SET_CURRENT, value: obj }) });
            return state;
        case PUBLIC_ACTION_CURRENT.SAVE_CURRENT:
            fetch(`${REST_ADR_SRV}/memes${state.current.id ? '/' + state.current.id : ''}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: (state.current.id ? 'PUT' : 'POST'),
                body: JSON.stringify(state.current)
            }).then(flux => flux.json())
                .then(obj => { store.dispatch({ type: PUBLIC_ACTION_CURRENT.SET_CURRENT, value: obj }) });
            return state;

        /* default case */
        default:
            return state
    }
};

//combine reducer

const combinedReducer = combineReducers({ meme: currentReducer, datas: globalReducer })
//creation du store 
const store = createStore(combinedReducer);
console.log(store.getState())
//abonnement aux changelents du store
store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({ type: PUBLIC_ACTION_CURRENT.SET_CURRENT, 
//     value: { 
//         titre: 'coucou', 
//         x: 10, 
//         y: 20, 
//         text: 'Bonjour', 
//         imageId: 3, 
//         color: '#0000AC', 
//         fsize: 32 
//     } 
// })
export default store;
// let monState = undefined;
// //un changement
// monState = currentReducer(monState, { type: PUBLIC_ACTION_CURRENT.SET_CURRENT, value: { titre: '', x: 10, y: 20, text: 'Hello', imageId: 3, color: '#FFFFFF', fsize: 17 } });
// console.log(monState);


// monState = currentReducer(monState, { type: PUBLIC_ACTION_CURRENT.SET_CURRENT, value: { titre: 'mon titre', x: 30, y: 120, text: 'Hello', imageId: 3, color: '#FFFFFF', fsize: 17 } });
// console.log(monState);
