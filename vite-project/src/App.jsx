import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      completedTasks: [],
      newTask: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  addTask = () => {
    const { newTask, tasks } = this.state;
    this.setState({
      tasks: [...tasks, newTask],
      newTask: "",
    });
  };

  completeTask = (index) => {
    const { tasks, completedTasks } = this.state;
    const taskToComplete = tasks[index];
    this.setState({
      tasks: tasks.filter((_, i) => i !== index),
      completedTasks: [...completedTasks, taskToComplete],
    });
  };

  deleteTask = (index) => {
    const { completedTasks } = this.state;
    this.setState({
      completedTasks: completedTasks.filter((_, i) => i !== index),
    });
  };

  render() {
    const { tasks, completedTasks, newTask } = this.state;

    return (
      <div className="app">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            value={newTask}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addTask}>Add</button>
        </div>
        <div className="task-lists">
          <div className="tasks">
            <h2>Done</h2>
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>
                  {task}
                  <button onClick={() => this.completeTask(index)}>done</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="completed-tasks">
            <h2>To do</h2>
            <ul>
              {completedTasks.map((task, index) => (
                <li key={index}>
                  {task}
                  <button onClick={() => this.deleteTask(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
