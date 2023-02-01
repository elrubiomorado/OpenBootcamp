import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';//Importamos el componente
import GreetingF from './components/pure/greetingF';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name="Edgar"></Greeting>     Asi se ponen los comentarios */}
        <GreetingF name="Edgar"></GreetingF>
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
