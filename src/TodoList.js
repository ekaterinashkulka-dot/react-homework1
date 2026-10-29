import { useState } from "react";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);

  const onClickHandler = () => {
    const updatedItems = [...item, input];
    setItem(updatedItems);
    setInput("");
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
      <ul>
        {item.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <button onClick={onClickHandler}>Add TO DO</button>
    </>
  );
};

export default TodoList;
