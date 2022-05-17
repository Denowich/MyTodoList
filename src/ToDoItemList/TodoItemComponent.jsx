import React, { useState } from 'react';

const TodoItemComponent = ({ todoItem, todoList, setTodoList }) => {
  const [inputState, setInputState] = useState('');
  const resolvedClass = {
    textDecoration: 'line-through',
  };

  const inputDescriptionHandler = (event) => {
    setInputState(event.target.value);
  };

  const onBlurDescriptionHandler = () => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === todoItem.id) {
        return { ...todo, description: inputState };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };
  return (
    <div className="todo-item">
      <div className="description-wrapper">
        <h4 style={{ marginBottom: 5 }}>{todoItem.description}</h4>
      </div>
      <input
        type="text"
        value={inputState}
        onChange={inputDescriptionHandler}
        onBlur={onBlurDescriptionHandler}
        style={todoItem.completed === true ? resolvedClass : {}}
      />
      <div className="input-wrapper">

        {/* ToDo: Denys add checkbox to this component */}
        {/* <input
            type="checkbox"
            defaultChecked={props.completed}
            onChange={props.handleChange}
        /> */}
      </div>
    </div>
  );
}

export default TodoItemComponent;
