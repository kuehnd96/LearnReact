import React, { useState } from 'react';
import './App.css';

// functional component w/ state using hooks
function App() {
  
  const [todos, setTodos] = useState([
    {text: "Learn about React"},
    {text: "Meet friend for lunch"},
    {text: "Build really cool todo app"}
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];

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
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

// How we display a todo item
const Todo = ({ todo }) => <div className="todo">{todo.text}</div>

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
