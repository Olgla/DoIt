import { useState } from 'react';
import './/styles/App.css';
import TodoList from './TodoList'; //import DEFAULT component
import { TodoForm } from './TodoForm'; //import NAMED component

export default function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(title) {
    const newTodo = { title, id: Date.now(), isCompleted: false };
    setTodoList([...todoList, newTodo]);
  }

  function completeTodo(id) {
    const updatedTodos = todoList.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: true } : todo
    );

    setTodoList(updatedTodos);
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onCompleteTodo={completeTodo} />
    </>
  );
}
