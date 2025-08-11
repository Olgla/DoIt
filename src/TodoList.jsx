{
  /*export function TodoList() {...} //EXPORT NAMED COMPOPNENT //THIS IS A COMMENT SYNTAX
  /*export default function TodoList() {...} another option- and no export below AS DEFAULT. Shares all methods from the file*/
}
import TodoListItem from './TodoListItem';

function TodoList({ todoList, onCompleteTodo }) {
  const filteredTodoList = todoList.filter((todo) => !todo.isCompleted);

  if (todoList.length === 0) {
    return <p>Add todo above to get started</p>;
  }
  return (
    <div>
      <ul>
        {filteredTodoList.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onCompleteTodo={() => onCompleteTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
