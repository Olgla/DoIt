import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
{
  /* import DEFAULT component */
}
import { TodoForm } from './TodoForm';
{
  /* import NAMED component */
}

function App() {
  {
    /*const [taskCurrentState, setNewStateFunction] = useState('new state value'); //my destructured variables names*/
  }

  const [newTodo, setNewTodo] = useState('new state value');
  return (
    <>
      <h1>Todo List</h1>
      <TodoForm />
      <p>{newTodo}</p>
      <TodoList />
    </>
  );
}

export default App;
