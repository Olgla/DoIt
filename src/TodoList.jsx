{
  /*export function TodoList() {...} //EXPORT NAMED COMPOPNENT //THIS IS A COMMENT SYNTAX
  /*export default function TodoList() {...} another option- and no export below AS DEFAULT. Shares all methods from the file*/
}
import TodoListItem from './TodoListItem';

function TodoList({ todoList }) {
  return (
    <div>
      <ul>
        {/*map will add as many TodoListItem components as const todos has
        key is util not used in child, title will go to the child */}
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
