import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile";
import Counter from "./Counter";
import DelaydToggle from "./DelaydToggle";

function App() {
  return (
    <div className="App">
      <DelaydToggle />
      <Counter />
      <Profile username="emsthf" name="든솔" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
