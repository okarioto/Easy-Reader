import logo from "./logo.svg";
import "./App.css";

function App() {
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
        <label for="font-type">Font:</label>

        <select name="font-type" id="font-type">
          <option value="font1">arial</option>
          <option value="font2">calibri</option>
          <option value="font3">helvitica</option>
          <option value="font4">times</option>
        </select>
      </header>
    </div>
  );
}

export default App;
