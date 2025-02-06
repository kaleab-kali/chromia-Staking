import React, { useState } from 'react';
import Header from './components/Header';
import AddTodoForm from './components/AddToDoForm';
import TodoList from './components/TodoList';

interface Todo {
  id: number;
  text: string;
  user: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string, user: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      user,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

export default App;