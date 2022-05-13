import React, { Component } from "react";
import "./App.css";
import ToDoItemList from './ToDoItemList/ToDoItemList.js';

class App extends Component {
  

  // handleChange = id => {
  //   const index = this.state.todoItems.map(item => item.id).indexOf(id);
  //   this.setState(state => {
  //     let { todoItems } = state;
  //     todoItems[index].completed = true;
  //     return todoItems;
  //   });
  // };

  render() {
    // const { todoItems } = this.state;
    // const activeTasks = todoItems.filter(task => task.completed === false);
    // const completedTasks = todoItems.filter(task => task.completed === true);
    // const finalTasks = [...activeTasks, ...completedTasks].map(item => {
      return (
        <>
        <div className="App">
        <h1 className="title">Какие планы на день:</h1>
        <h2 className="titleBlock">Задачи на сегодня:</h2>
        
      </div>
        <ToDoItemList />
      </>
      );
    };
  }
export default App;
