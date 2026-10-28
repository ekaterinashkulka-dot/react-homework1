import React from "react";
import TodosList from "./TodosList";

const RenderComponent = () => {
  const toDos = [
    { id: 1, todo: "firstTodo" },
    { id: 2, todo: "secondTodo" },
    { id: 3, todo: "thirdTodo" },
    { id: 4, todo: "fourthTodo" },
  ];
  return (
    <div>
      {toDos.map((todo) => {
        console.log(todo);
        return <TodosList key={todo.id} todo={todo.todo} />;
      })}
    </div>
  );
};

export default RenderComponent;
