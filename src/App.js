import "./App.css";
import Welcome from "./NewComponents/Welcome";
import About from "./NewComponents/About";
import CounterComponents from "./CounterComponents";
import ListComponent from "./listComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React homework</h1>
        <Welcome />
        <About />
        <ListComponent />
        <CounterComponents />
      </header>
    </div>
  );
}

export default App;
