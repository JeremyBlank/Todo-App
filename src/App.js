import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);  // add whatever input to to todos array
    setInput("");  // clear the input field

  };

  return (
    <div className="App">
      <h1>Todo App</h1>

      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button type="submit" onClick={addTodo}>
          Add todo
        </button>
      </form>

      {todos.map((todo) => (
        <Todo title={todo} />
      ))}
    </div>
  );
}

export default App;
