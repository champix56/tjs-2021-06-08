import './App.css';
import Button from './components/Button/Button';
function App() {
  return (
    <div className="App">
      Demat Breizh
      <hr />
      <Button>
        <img src="https://cdn1.iconfinder.com/data/icons/science-technology-outline/91/Science__Technology_23-256.png" alt="click"/>
        Hello
      </Button>
      {/* <Button title="bejamin"></Button>
      <Button title="Cliquez ici"></Button>
      <Button title="Clequez PAS ici"></Button> */}
    </div>
  );
}

export default App;
