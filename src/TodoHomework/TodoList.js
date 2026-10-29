import { useState } from "react";
import TodoItems from "./TodoItems";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([
    { id: 1, name: "first" },
    { id: 2, name: "second" },
    { id: 3, name: "third" },
    { id: 4, name: "fourth" },
  ]);
  const [nextId, setNextId] = useState(5);

  const onClickHandler = () => {
    const newTask = {
      id: nextId,
      name: input,
    };
    setNextId((prevId) => prevId + 1);
    const updatedItems = [...item, newTask];
    setItem(updatedItems);
    setInput("");
  };

  const dleteTask = (id) => {
    const updatedItems = item.filter((task) => task.id !== id);
    setItem(updatedItems);
  };

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClickHandler();
    }
  };

  return (
    <>
      <input
        placeholder="New task"
        onChange={onChangeHandler}
        value={input}
        onKeyDown={onKeyDown}
      />
      <p>Tasks: {item.length}</p>

      <TodoItems tasks={item} onDelete={dleteTask} />

      <button onClick={onClickHandler}>Add TO DO</button>
    </>
  );
};

export default TodoList;
