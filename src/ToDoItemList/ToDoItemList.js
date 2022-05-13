import React, { useState } from "react";
import "./todoItem.css";
import TodoItemComponent from "./TodoItemComponent";
import todosData from "../todosData";

const ToDoItemList = (props) => {
  const [todoList, setTodoList] = useState(todosData);
  console.log('todoList',todoList);
  return (
    
    <div>
      {todoList.map(todoItem => {
      return (
        <TodoItemComponent
          todoItem={todoItem} 
          setTodoList={setTodoList}
        />
        
      )
      })}
      {/* // todoDescription={todo} */}
      </div>
  );
};

export default ToDoItemList;
