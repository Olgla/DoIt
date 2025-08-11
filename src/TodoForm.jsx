import { useRef, useState } from 'react';

export function TodoForm({ onAddTodo }) {
  const [workingTodoTitle, setWorkingTodoTitle] = useState('');
  const todoTitleInput = useRef(null);

  function handleAddTodo(event) {
    event.preventDefault();

    onAddTodo(workingTodoTitle);
    event.target.title.value = '';
    todoTitleInput.current.focus();

    setWorkingTodoTitle('');
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        ref={todoTitleInput}
        onChange={(event) => setWorkingTodoTitle(event.target.value)}
      />
      <button type="submit" disabled={!workingTodoTitle.trim()}>
        Add Todo
      </button>
    </form>
  );
}
