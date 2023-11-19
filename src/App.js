import logo from "./logo.svg";
import "./App.css";

function App() {
  const openlink = () => {
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>;
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        <h3 className="title">hellow</h3>
        <button
          onClick={() => {
            alert("bobby");
          }}
        >
          click
        </button>
      </header>
    </div>
  );
}

export default App;
