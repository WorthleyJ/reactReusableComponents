import logo from './logo.svg';
import './App.css';

import Button from "./display_components/display_button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Scroll down to see react in action</h1>
      </header>
      <Button />
    </div>
  );
}

export default App;


