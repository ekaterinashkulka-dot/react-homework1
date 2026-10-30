import { Component } from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component {
  state = {
    input: "",
    item: [],
    nextId: 5,
  };

  componentDidMount() {
    console.log("TodoList mounted");
    const savedTodos = localStorage.getItem("todos");
    console.log(savedTodos);
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos);

      const maxId = Math.max(0, ...parsedTodos.map((task) => task.id));

      this.setState({
        item: parsedTodos,
        nextId: maxId + 1,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.item !== this.state.item) {
      if (this.state.item.length === 0) {
        localStorage.removeItem("todos");
      } else {
        localStorage.setItem("todos", JSON.stringify(this.state.item));
      }
    }
  }

  onClickHandler = () => {
    const newTask = {
      id: this.state.nextId,
      name: this.state.input,
    };
    this.setState((prevState) => ({
      nextId: prevState.nextId + 1,
      item: [...prevState.item, newTask],
      input: "",
    }));
  };

  deleteTask = (id) => {
    const updatedItems = this.state.item.filter((task) => task.id !== id);
    this.setState({ item: updatedItems });
  };

  clearTodoList = () => {
    this.setState({
      item: [],
    });
  };

  onChangeHandler = (e) => {
    const value = e.target.value;
    this.setState({ input: value });
  };

  onKeyDown = (e) => {
    if (e.key === "Enter") {
      this.onClickHandler();
    }
  };

  render() {
    return (
      <>
        <input
          placeholder="New task"
          onChange={this.onChangeHandler}
          value={this.state.input}
          onKeyDown={this.onKeyDown}
        />
        <p>Tasks: {this.state.item.length}</p>

        <TodoItems tasks={this.state.item} onDelete={this.deleteTask} />

        <button onClick={this.onClickHandler}>Add TO DO</button>
        <button onClick={this.clearTodoList}>Clear Todo List</button>
      </>
    );
  }
}

export default TodoList;
