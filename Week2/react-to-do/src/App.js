import React, { useState } from 'react';
import './App.css';

// functional component w/ state using hooks
function App() {
  
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isComplete: false
    },
    {
      text: "Meet friend for lunch",
      isComplete: false
    },
    {
      text: "Build really cool todo app",
      isComplete: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];

    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];

    newTodos[index].isComplete = true;

    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];

    newTodos.splice(index, 1);

    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

// How we display a todo item
function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isComplete ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

// Input form for new todo items
function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!value) return;

    addTodo(value);

    setValue("");
  };



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default App;
