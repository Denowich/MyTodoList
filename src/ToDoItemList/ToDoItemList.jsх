import React, { useState } from 'react';
import todosData from '../todosData';
import TodoItemComponent from './TodoItemComponent';
import './todoItem.css';

const ToDoItemList = () => {
  const [todoList, setTodoList] = useState(todosData);

  return (
    <>
      {todoList.map((todoItem) => (
        <TodoItemComponent
          key={todoItem.id}
          todoItem={todoItem}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </>
  );
}

export default ToDoItemList;
