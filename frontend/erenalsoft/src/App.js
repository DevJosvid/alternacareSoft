import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        this is eRenalSoft
        </p>
        <a
          className="App-link"
          href="https://www.renalsoft.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          renalsoft
          <h1 className="text-3xl font-bold underline">
      and Tailwindcss!
    </h1>
        </a>
      </header>
    </div>
  );
}

export default App;
