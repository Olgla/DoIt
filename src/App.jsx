import './App.css';
{
  /*import { TodoList } from './TodoList'; // IMPORT NAMED COMPONENT */
}

import TodoList from './TodoList';
import { TodoForm } from './TodoForm';

function App() {
  return (
    <>
      <div>
        <TodoList />
        <TodoForm />
      </div>
    </>
  );
}

export default App;
