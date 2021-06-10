import React from 'react';
import FlexLayout from './components/FlexLayout/FlexLayout';
import MemeForm from './components/MemeForm/MemeForm';
import MemeViewer from './components/MemeViewer/MemeViewer';
import { REST_ADR_SRV } from './config/config';
import store, { initialState, PUBLIC_ACTION_CURRENT } from './store/store';
/**
 * Composant principale de notre application
 */
class App extends React.Component {
  //counter=1
  constructor(props) {
    super(props);
    this.state = {
      current: initialState.current,
      images: []
    };
  }
  componentDidMount() {
    this.setState({current:store.getState().current})
    store.subscribe(()=>{
      console.log('Etat de app mis a jour par subscribe');
      this.setState({current:store.getState().current})
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
      <FlexLayout>
        <div>
          <MemeViewer meme={{
            ...this.state.current,
            image: this.state.images.find(e => e.id === this.state.current.imageId)
          }} />
        </div>
        <MemeForm images={this.state.images} onSubmit={formState => this.setState({ current: formState })} />
      </FlexLayout>
      {JSON.stringify(this.state)}
    </div>;
  }
}
export default App;