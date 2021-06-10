import React from 'react';
import FlexLayout from './components/FlexLayout/FlexLayout';
import FlowLayout from './components/FlowLayout/FlowLayout';
import MemeForm from './components/MemeForm/MemeForm';
import MemeViewer from './components/MemeViewer/MemeViewer';
import { REST_ADR_SRV } from './config/config';
import store, { initialState, globalInitialState } from './store/store';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
/**
 * Composant principale de notre application
 */
class App extends React.Component {
  //counter=1
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      ...globalInitialState
    };
  }
  componentDidMount() {
    this.setState({
      ...store.getState().meme,
      ...store.getState().datas
    })
    store.subscribe(() => {
      console.log('Etat de app mis a jour par subscribe');
      this.setState({
        ...store.getState().meme,
        ...store.getState().datas
      })
    })
    // fetch(`${REST_ADR_SRV}/images`)
    //   .then(flux => flux.json())
    //   .then(arr => this.setState({ images: arr }))
  }
  componentDidUpdate(pprops, pstate) {
    console.log(arguments);
    console.log(this.state);
    //Verif et moddif d'etat suite a une modif d'etat (action en chaine) Attention prevenir mles boucles infinies
    if (this.state.counter === 1 && this.state.maChaine !== 'new Val') { this.setState({ maChaine: 'new Val' }); }
  }
  render() {
    return <div className="App">
        <FlowLayout>
          {this.state.memes.map((elem, i) => <MemeViewer key={'meme-' + i} meme={{
            ...elem,
            image: this.state.images.find(e => e.id === elem.imageId)
          }} />)}
        </FlowLayout>
        <FlexLayout>
          <div>
            <MemeViewer meme={{
              ...this.state.current,
              image: this.state.images.find(e => e.id === this.state.current.imageId)
            }} />
          </div>
          <MemeForm images={this.state.images} onSubmit={formState => this.setState({ current: formState })} />
        </FlexLayout>
      </div>;
  }
}
export default App;