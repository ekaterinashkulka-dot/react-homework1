import "./App.css";
import Welcome from "./NewComponents/Welcome";
import About from "./NewComponents/About";
import CounterComponents from "./CounterComponents";
import ListComponent from "./listComponent";
import RenderComponent from "./RenderComponent";
import TodoList from "./TodoHomework/TodoList";
import MyClassComponent from "./MyClassComponent";
import { useState } from "react";

function App() {
  const [isShowTimer, setisShowTimer] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {/* <Welcome />
        <About /> */}
        {/* <ListComponent />
        <CounterComponents /> */}
        {/* {isShowTimer ? <MyClassComponent /> : }
        <button onClick={() => setisShowTimer((prev) => !prev)}>
          Show timer
        </button> */}
        <TodoList />
      </header>
    </div>
  );
}

export default App;
