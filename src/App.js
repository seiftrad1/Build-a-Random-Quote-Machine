import logo from "./logo.svg";
import "./App.css";
import Twitter from "./twitter";
import "./Assets/css/bootstrap.min.css";
import "./Assets/font-awesome-4.7.0/css/font-awesome.min.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Twitter />
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
