export const actions = {
  fetchTodos: 'fetchTodos',
  loadTodos: 'loadTodos',
  setLoadError: 'setLoadError',
  startRequest: 'startRequest',
  addTodo: 'addTodo',
  endRequest: 'endRequest',
  updateTodo: 'updateTodo',
  completeTodo: 'completeTodo',
  revertTodo: 'revertTodo',
  clearError: 'clearError',
};

export const initialState = {
  todoList: [],
  isLoading: false,
  isSaving: false,
  errorMessage: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.fetchTodos:
      return { ...state, isLoading: true, errorMessage: null };

    case actions.loadTodos: {
      const fetched = action.records.map((record) => ({
        id: record.id,
        ...record.fields,
        isCompleted: !!record.fields.isCompleted,
      }));
      return { ...state, todoList: fetched, isLoading: false };
    }

    case actions.setLoadError:
      return {
        ...state,
        isLoading: false,
        isSaving: false,
        errorMessage: action.error?.message || action.error || 'Unknown error',
      };

    case actions.startRequest:
      return { ...state, isSaving: true, errorMessage: null };

    case actions.addTodo: {
      const saved = { id: action.records[0].id, ...action.records[0].fields };
      if (!saved.isCompleted) saved.isCompleted = false;
      return {
        ...state,
        isSaving: false,
        todoList: [...state.todoList, saved],
      };
    }

    case actions.endRequest:
      return { ...state, isLoading: false, isSaving: false };

    case actions.updateTodo:
    case actions.revertTodo: {
      const updatedTodos = state.todoList.map((t) =>
        t.id === action.editedTodo.id ? action.editedTodo : t
      );
      return {
        ...state,
        todoList: updatedTodos,
        errorMessage: action.error?.message || state.errorMessage,
      };
    }

    case actions.completeTodo:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id ? { ...todo, isCompleted: true } : todo
        ),
      };

    case actions.clearError:
      return { ...state, errorMessage: null };

    default:
      return state;
  }
}
