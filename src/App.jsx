import styles from './styles/App.module.css';
import TodoList from './features/TodoList/TodoList';
import TodoForm from './features/TodoForm';
import { useState, useEffect, useCallback, useReducer } from 'react';
import TodosViewForm from './features/TodosViewForm';
import {
  reducer as todosReducer,
  actions as todoActions,
  initialState as initialTodosState,
} from './reducers/todos.reducer';

const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${
  import.meta.env.VITE_TABLE_NAME
}`;
const token = `Bearer ${import.meta.env.VITE_PAT}`;

function App() {
  const [todoState, dispatch] = useReducer(todosReducer, initialTodosState);
  const [sortField, setSortField] = useState('createdTime');
  const [sortDirection, setSortDirection] = useState('desc');
  const [queryString, setQueryString] = useState('');

  const encodeUrl = useCallback(() => {
    let sortQuery = `sort[0][field]=${sortField}&sort[0][direction]=${sortDirection}`;
    let searchQuery = '';
    if (queryString) {
      searchQuery = `&filterByFormula=SEARCH("${queryString}", {title})`;
    }
    return encodeURI(`${url}?${sortQuery}${searchQuery}`);
  }, [sortField, sortDirection, queryString]);

  // Fetch todos
  useEffect(() => {
    const fetchTodos = async () => {
      dispatch({ type: todoActions.fetchTodos });
      const options = {
        headers: { Authorization: token },
      };

      try {
        const resp = await fetch(encodeUrl(), options);

        if (!resp.ok) throw new Error(resp.statusText || `HTTP ${resp.status}`);
        const { records } = await resp.json();
        dispatch({ type: todoActions.loadTodos, records });
      } catch (err) {
        dispatch({ type: todoActions.setLoadError, error: err });
      }
    };
    fetchTodos();
  }, [sortField, sortDirection, queryString, encodeUrl]);

  // Add todo
  async function addTodo(title) {
    const newTodo = { title, isCompleted: false };
    const payload = {
      records: [{ fields: newTodo }],
    };
    const options = {
      method: 'POST',
      headers: { Authorization: token, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };

    try {
      dispatch({ type: todoActions.startRequest });
      const resp = await fetch(encodeUrl(), options);
      if (!resp.ok) throw new Error(resp.statusText || `HTTP ${resp.status}`);
      const { records } = await resp.json();
      dispatch({ type: todoActions.addTodo, records });
    } catch (err) {
      dispatch({ type: todoActions.setLoadError, error: err });
    } finally {
      dispatch({ type: todoActions.endRequest });
    }
  }

  // Complete todo
  async function completeTodo(id) {
    const original = todoState.todoList.find((t) => t.id === id);
    dispatch({ type: todoActions.completeTodo, id });

    const payload = {
      records: [{ id, fields: { isCompleted: true } }],
    };
    const options = {
      method: 'PATCH',
      headers: { Authorization: token, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };

    try {
      const resp = await fetch(encodeUrl(), options);
      if (!resp.ok) throw new Error(resp.statusText || `HTTP ${resp.status}`);
    } catch (err) {
      dispatch({
        type: todoActions.revertTodo,
        editedTodo: original,
        error: err,
      });
    }
  }

  // Update todo
  async function updateTodo(editedTodo) {
    const original = todoState.todoList.find((t) => t.id === editedTodo.id);
    dispatch({ type: todoActions.updateTodo, editedTodo });

    const payload = {
      records: [
        {
          id: editedTodo.id,
          fields: {
            title: editedTodo.title,
            isCompleted: editedTodo.isCompleted,
          },
        },
      ],
    };
    const options = {
      method: 'PATCH',
      headers: { Authorization: token, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };

    try {
      const resp = await fetch(encodeUrl(), options);
      if (!resp.ok) throw new Error(resp.statusText || `HTTP ${resp.status}`);
    } catch (err) {
      dispatch({
        type: todoActions.revertTodo,
        editedTodo: original,
        error: err,
      });
    }
  }

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.header}>My Todo App</h1>
      <TodoForm onAddTodo={addTodo} isSaving={todoState.isSaving} />
      <TodoList
        todoList={todoState.todoList}
        isLoading={todoState.isLoading}
        onCompleteTodo={completeTodo}
        onUpdateTodo={updateTodo}
      />
      <hr />
      <TodosViewForm
        sortField={sortField}
        setSortField={setSortField}
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
        setQueryString={setQueryString}
      />

      {todoState.errorMessage && (
        <div className={styles.error}>
          <hr />
          <p role="alert">Error: {todoState.errorMessage}</p>
          <button onClick={() => dispatch({ type: todoActions.clearError })}>
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
