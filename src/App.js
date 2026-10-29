import "./App.css";
import Welcome from "./NewComponents/Welcome";
import About from "./NewComponents/About";
import CounterComponents from "./CounterComponents";
import ListComponent from "./listComponent";
import RenderComponent from "./RenderComponent";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* d */}
        {/* <Welcome />
        <About /> */}
        {/* <ListComponent />
        <CounterComponents /> */}
        <TodoList />
      </header>
    </div>
  );
}

export default App;
