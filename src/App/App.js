import { logDOM } from '@testing-library/dom';
import './App.css';
import Button from './components/Button/Button';
function App() {
  //variable local ne sera pas mis a jour dans la representation du composant car pas variable etatique
  let counter=0;
  return (
    <div className="App">
      Demat Breizh -- {counter}
      <hr />
      <Button bgcolor="green" lorsqueJeClickeraiSurLeButton={argument=>{
        //la variable est bien mise a jour mais ne sera pas disposé dans la bonne valeur actuelle car pas une valeur gerre comme un etat avec les refraichissement lié aux etats.
        counter++;
        console.log('Depuis App : '+counter);
      }}>
        <img src="https://cdn1.iconfinder.com/data/icons/science-technology-outline/91/Science__Technology_23-256.png" alt="click"/>
        Hello
      </Button>
      <Button bgcolor="tomato" isItalic={false}><h1>Benjamin</h1></Button>
      <Button bgcolor="skyblue">Cliquez PAS ici</Button>
      <Button >clickez Ici</Button>
    </div>
  );
}

export default App;
