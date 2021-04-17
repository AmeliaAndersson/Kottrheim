import './App.css';
import sotis from './images/mia.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={sotis}  className="App-logo" alt="logo" />
        <p>
          Veckans Sötis i familjen Kottrheim är :
        </p>
        <p className="Announcement" >
          MIA
        </p>
      </header>
    </div>
  );
}

export default App;
