import logo from './logo.svg';
import './App.css';
import Myelement from './Myelement';
import sum from './sum'
import listIems from './listIems';
import Objet from './Objet';
import Animals from './animals'
import Animals2 from './animals2'

const object = {
  first_name: 'Bob',
  last_name: 'Dylan'
};

function App() {
  return (
    <div className="App">
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

      <main>
        <h1>Hello World !</h1>
        <h2>I don't use JSX!</h2>
        <div> { Myelement } </div>
        <h3 >React is {sum} times better with JSX</h3>
        <h2>I am a Header</h2>
        <h2>I am a Header too</h2>
        <div> { listIems } </div>
        <input type='text'/>
        <Objet first_name={object.first_name} last_name={object.last_name}/>
      </main>

      <footer>
        <div>
          <Animals />
        </div>
        <div>
          <Animals2 />
        </div>
      </footer>
    </div>
  );
}

export default App;
