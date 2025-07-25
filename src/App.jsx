import { useState } from 'react';
import './/styles/App.css';
import TodoList from './TodoList';
{
  /* import DEFAULT component */
}
import { TodoForm } from './TodoForm';
{
  /* import NAMED component */
}

const todos = [
  { id: 1, title: 'review resources' },
  { id: 2, title: 'take notes' },
  { id: 3, title: 'code the app' },
];

function App() {
  {
    /*const [taskCurrentState, setNewStateFunction] = useState('new state value'); //my destructured variables names*/
  }

  const [todoList, setTodoList] = useState([]);
  {
    /*cont[...]-is a hook- op top level inside function, inside the component(TodoLost)- 2 rules of hooks
    todos variable here is read only, use setTodos f-n to change it
    also, can add multiple hooks here if needed*/
  }

  function addTodo(title) {
    const newTodo = { title, id: Date.now() };
    setTodoList([...todoList, newTodo]);
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
