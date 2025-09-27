export const actions = {
  //actions in useEffect that loads todos
  fetchTodos: 'fetchTodos',
  loadTodos: 'loadTodos',
  //found in useEffect and addTodo to handle failed requests
  setLoadError: 'setLoadError',
  //actions found in addTodo
  startRequest: 'startRequest',
  addTodo: 'addTodo',
  endRequest: 'endRequest',
  //found in helper functions
  updateTodo: 'updateTodo',
  completeTodo: 'completeTodo',
  //reverts todos when requests fail
  revertTodo: 'revertTodo',
  //action on Dismiss Error button
  clearError: 'clearError',
};

export const initialState = {
  TodoList: [],
  isLoading: false,
  isSaving: false,
  errorMessage: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.fetchTodos:
      return { ...state, isLoading: true, errorMessage: null };
    case actions.loadTodos:
      return { ...state, isLoading: false, TodoList: action.payload.todos };
    case actions.setLoadError:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.message,
      };
    case actions.startRequest:
      return { ...state, isSaving: true, errorMessage: null };
    case actions.addTodo:
      return {
        ...state,
        isSaving: false,
        TodoList: [...state.TodoList, action.payload.todo],
      };
    case actions.endRequest:
      return { ...state, isSaving: false };
    case actions.updateTodo:
      return {
        ...state,
        TodoList: state.TodoList.map((t) =>
          t.id === action.payload.todo.id ? action.payload.todo : t
        ),
      };
    case actions.completeTodo:
      return {
        ...state,
        TodoList: state.TodoList.map((t) =>
          t.id === action.payload.todo.id ? action.payload.todo : t
        ),
      };
    case actions.revertTodo:
      return {
        ...state,
        errorMessage: action.payload.message,
        TodoList: state.TodoList.map((t) =>
          t.id === action.payload.todo.id ? action.payload.todo : t
        ),
      };
    case actions.clearError:
      return { ...state, errorMessage: null };
    default:
      return state;
  }
}

export default reducer;
