import React from 'react';
import Button from './components/Button/Button';
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
    {this.state.maChaine} voici le counter : {this.state.counter}
      <Button bgcolor="green" lorsqueJeClickeraiSurLeButton={argument => {
        this.setState({counter:this.state.counter+1});
        //decalage du a l'async 
        console.log('Depuis App : ' + this.state.counter);
      }}>
        <img src="https://cdn1.iconfinder.com/data/icons/science-technology-outline/91/Science__Technology_23-256.png" alt="click" />
        Hello
      </Button>
    </div>;
  }
}
export default App;