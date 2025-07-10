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
  return (
    <>
      <h1>Todo List</h1>
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </>
  );
}

export default App;
