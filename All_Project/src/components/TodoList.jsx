import { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleTodo = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updated);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "done") return todo.completed;
    return true;
  });

  const itemsLeft = todos.filter((todo) => !todo.completed).length;
  const deleteTodo = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };

  const clearCompleted = () => {
    const activeTodos = todos.filter((todo) => !todo.completed);
    setTodos(activeTodos);
  };
  return (
    <div className="container">
      <h1>My Todos</h1>

      <div className="inputSection">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="inputTodo"
        />
        <button className="addBtn" onClick={addTodo}>
          Add
        </button>
      </div>

      <div className="filters">
        <button
          className={filter === "all" ? "activeFilter" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? "activeFilter" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={filter === "done" ? "activeFilter" : ""}
          onClick={() => setFilter("done")}
        >
          Done
        </button>
      </div>

      <ul className="todoList">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="todoItem">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.text}
            </span>
            <button className="deleteBtn" onClick={() => deleteTodo(todo.id)}>
              ×
            </button>
          </li>
        ))}
      </ul>

      <div className="footer">
        <p>{itemsLeft} left</p>
        <button className="clearBtn" onClick={clearCompleted}>
          Clear done ({todos.length - itemsLeft})
        </button>
      </div>
    </div>
  );
};
export default TodoList;
