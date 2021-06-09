import React from 'react';
import FlexLayout from './components/FlexLayout/FlexLayout';
import MemeForm from './components/MemeForm/MemeForm';
/**
 * Composant principale de notre application
 */
class App extends React.Component {
  //counter=1
  constructor(props){
    super(props);
    this.state={counter:0, maChaine:'Hello'};
  }
  componentDidUpdate(pprops,pstate){
    console.log(arguments);
    console.log(this.state);
    //Verif et moddif d'etat suite a une modif d'etat (action en chaine) Attention prevenir mles boucles infinies
    if(this.state.counter===1 && this.state.maChaine!=='new Val'){this.setState({maChaine:'new Val'});}
  }
  render() {
    return <div className="App">
      <FlexLayout>
          <div></div>
          <MemeForm/>
      </FlexLayout>
     
    </div>;
  }
}
export default App;