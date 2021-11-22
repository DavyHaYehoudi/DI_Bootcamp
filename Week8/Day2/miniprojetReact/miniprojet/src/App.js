import PrintHello from './PrintHello';
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapCard from './BootstrapCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PrintHello />
        <BootstrapCard />
      </header>
    </div>
  );
}

export default App;
