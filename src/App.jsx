import { useState, useEffect } from 'react';
import * as api from './services/api';
import './App.css'; // We'll create this file for styling

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch todos when the component mounts
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await api.getTodos();
        setTodos(response.data);
      } catch (err) {
        setError('Failed to fetch todos. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  // Handler to add a new todo
  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Prevent adding empty todos

    try {
      const newTodo = { title: input, completed: false };
      const response = await api.addTodo(newTodo);
      setTodos([...todos, response.data]);
      setInput(''); // Clear input field
    } catch (err) {
      setError('Failed to add todo.');
      console.error(err);
    }
  };

  // Handler to toggle a todo's completion status
  const handleToggleComplete = async (id, completed) => {
    try {
      const updatedTodo = await api.updateTodo(id, { completed: !completed });
      setTodos(todos.map(todo => (todo._id === id ? updatedTodo.data : todo)));
    } catch (err) {
      setError('Failed to update todo.');
      console.error(err);
    }
  };

  // Handler to delete a todo
  const handleDeleteTodo = async (id) => {
    try {
      await api.deleteTodo(id);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      setError('Failed to delete todo.');
      console.error(err);
    }
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      {error && <p className="error-message">{error}</p>}
      
      <form onSubmit={handleAddTodo} className="add-todo-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button type="submit" className="add-button">Add</button>
      </form>

      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo._id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <span onClick={() => handleToggleComplete(todo._id, todo.completed)}>
                {todo.title}
              </span>
              <button onClick={() => handleDeleteTodo(todo._id)} className="delete-button">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;