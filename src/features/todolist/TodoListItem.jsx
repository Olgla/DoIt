{
  /* returned todo object from todo parameter: { todo: { id: ..., title: ... } }
function TodoListItem(todo) {
  return <li>{todo.todo.title}</li>;
}

OR desctructured below 
  */
}

function TodoListItem({ todo, onCompleteTodo }) {
  return (
    <li>
      <form>
        <input
          type="checkbox"
          id="todo"
          checked={todo.isCompleted}
          onChange={() => onCompleteTodo(todo.id)}
        />
        {todo.title}
      </form>
    </li>
  );
}

export default TodoListItem;

{
  /*DESTRUCTURED:
    TodoListItem({ title }) {
        return <li>{title}</li>;
}        
*/
}
