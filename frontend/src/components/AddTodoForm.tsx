import React, { useState } from 'react';

interface AddTodoFormProps {
  addTodo: (text: string, user: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [user, setUser] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && user.trim()) {
      addTodo(text, user);
      setText('');
      setUser('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
        className="p-2 border rounded mr-2"
      />
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Enter your name"
        className="p-2 border rounded mr-2"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;