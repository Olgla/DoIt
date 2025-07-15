{
  /*export function TodoList() {...} //EXPORT NAMED COMPOPNENT //THIS IS A COMMENT SYNTAX
  /*export default function TodoList() {...} another option- and no export below AS DEFAULT. Shares all methods from the file*/
}

import TodoListItem from './TodoListItem';

function TodoList() {
  const todos = [
    { id: 1, title: 'review resources' },
    { id: 2, title: 'take notes' },
    { id: 3, title: 'code the app' },
  ];

  return (
    <div>
      <ul>
        {/*map will add as many TodoListItem components as const todos has
        key is util not used in child, title will go to the child */}
        {todos.map((todo) => (
          <TodoListItem key={todo.id} title={todo.title} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
