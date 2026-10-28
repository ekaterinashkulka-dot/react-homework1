import "./App.css";
import Welcome from "./NewComponents/Welcome";
import About from "./NewComponents/About";
import CounterComponents from "./CounterComponents";
import ListComponent from "./listComponent";
import RenderComponent from "./RenderComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RenderComponent />
        {/* <Welcome />
        <About /> */}
        {/* <ListComponent />
        <CounterComponents /> */}
      </header>
    </div>
  );
}

export default App;
