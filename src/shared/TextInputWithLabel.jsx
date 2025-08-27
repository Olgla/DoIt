import TodoListItem from '../features/todolist/TodoListItem';

function TextInputWithLabel({ elementId, labelText, onChange, ref, value }) {
  return (
    <>
      <label htmlFor={elementId}>{labelText}</label>
      <input
        type="text"
        id={elementId}
        ref={ref}
        onChange={onChange}
        value={value}
      />
    </>
  );
}

export default TextInputWithLabel;
