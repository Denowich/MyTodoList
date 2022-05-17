import React, { Component } from "react";
import "./App.css";
import ToDoItemList from './ToDoItemList/ToDoItemList.js';

class App extends Component {
  render() {
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