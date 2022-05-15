import React, { useState } from "react";
import "./todoItem.css";
import TodoItemComponent from "./TodoItemComponent";
import todosData from "../todosData";

const ToDoItemList = () => {
  const [todoList, setTodoList] = useState(todosData);
  return (
    <div>
      {todoList.map(todoItem => {
        return (
          <TodoItemComponent
            key={todoItem.id}
            todoItem={todoItem}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        )
      })}
    </div>
  );
};

export default ToDoItemList;
