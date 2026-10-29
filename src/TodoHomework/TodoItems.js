const TodoItems = (props) => {
  return (
    <ul>
      {props.tasks.map((task) => {
        return (
          <li key={task.id}>
            {task.name}
            <button onClick={() => props.onDelete(task.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoItems;
