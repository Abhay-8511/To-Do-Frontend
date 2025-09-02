import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const getTodos = () => apiClient.get('/api/todos');
export const addTodo = (todo) => apiClient.post('/api/todos', todo);
export const updateTodo = (id, todo) => apiClient.put(`/api/todos/${id}`, todo);
export const deleteTodo = (id) => apiClient.delete(`/api/todos/${id}`);