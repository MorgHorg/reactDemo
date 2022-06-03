import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         Mikes site built with ReactJS
      </header>
      <navigator className="App-navigation" >
        <button className="App-navbutton">
          Home
        </button>
        <button className="App-navbutton">
          About me
        </button>
        <button className="App-navbutton">
          Other links
        </button>
        
      </navigator>
      
    </div>
  );
}

export default App;
