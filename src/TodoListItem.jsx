{
  /* returned todo object from todo parameter: { todo: { id: ..., title: ... } }
function TodoListItem(todo) {
  return <li>{todo.todo.title}</li>;
}

OR desctructured below 
  */
}

function TodoListItem({ todo }) {
  return <li>{todo.title}</li>;
}

export default TodoListItem;

{
  /*DESTRUCTURED:
    TodoListItem({ title }) {
        return <li>{title}</li>;
}        
*/
}
