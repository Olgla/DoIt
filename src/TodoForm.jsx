export function TodoForm(onAddTodo) {
  return (
    <form action="">
      <label htmlFor="todoTitle">Todo</label>
      <input type="text" id="todoTitle" />
      <button>Add Todo</button>
    </form>
  );
}
