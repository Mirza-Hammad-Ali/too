import { useState } from "react";
function App() {
  // Input ki value store karne ke liye
  const [todo, setTodo] = useState("");
  // Saare todos store karne ke liye
  const [todos, setTodos] = useState([]);
  // Input change hone par
  const handleInput = (event) => {
    setTodo(event.target.value);
  };
  // Todo add karna
  const addTodo = () => {
    // Empty todo add nahi hoga
    if (todo.trim() === "") {
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    // Input clear
    setTodo("");
  };
  // Todo complete/incomplete karna
  const toggleTodo = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };
  // Todo delete karna
  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  return (
    <div>
      <h1>Todo App</h1>
      {/* Input */}
      <input
        type="text"
        value={todo}
        onChange={handleInput}
        placeholder="Enter Todo"
      />
      {/* Add Button */}
      <button onClick={addTodo}>Add Todo</button>
      <h2>Todo List</h2>
      {/* Todo List */}
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleTodo(item.id)}
            />
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.text}
            </span>
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
