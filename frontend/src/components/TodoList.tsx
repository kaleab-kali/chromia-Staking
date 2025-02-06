import React from 'react';

interface Todo {
  id: number;
  text: string;
  user: string;
}

interface TodoListProps {
  todos: Todo[];
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="mb-2 p-2 border rounded flex justify-between items-center">
          <span>
            {todo.text} - <strong>{todo.user}</strong>
          </span>
          <button
            onClick={() => removeTodo(todo.id)}
            className="p-1 bg-red-500 text-white rounded"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;