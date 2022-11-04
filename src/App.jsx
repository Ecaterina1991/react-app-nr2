import React from "react";
import "./App.css";
// import TaskCard from "./components/task-card/TaskCard";
import TaskViewer from "./components/task-viewer/TaskViewer";
import CreateTaskForm from "./components/forms/CreateTaskForm";
import { useState } from "react";

//const data = [...];

const data = [
  {
    id: "T-1",
    name: "Create a Design System for Enum Workspace",
    status: "Todo",
    dueDate: new Date(2022, 5, 23),
  },
  {
    id: "T-2",
    name: "12 Create a Design System for Enum Workspace",
    status: "In Progress",
    dueDate: new Date(2022, 7, 24),
  },
  {
    id: "T-3",
    name: "13 Create a Design System for Enum Workspace",
    status: "Complete",
    dueDate: new Date(2022, 6, 13),
  },
  {
    id: "T-4",
    name: "14 Create a Design System for Enum Workspace",
    status: "Complete",
    dueDate: new Date(2022, 6, 13),
  },

  {
    id: "T-5",
    name: "13 Create a Design System for Enum Workspace",
    status: "Complete",
    dueDate: new Date(2022, 6, 13),
  },
  {
    id: "T-6",
    name: "14 Create a Design System for Enum Workspace",
    status: "Complete",
    dueDate: new Date(2022, 6, 13),
  },
];

function App() {
  const [taskList, setTaskList] = useState(data);

  const onNewTaskAdd = (newTask) => {
    console.log("task form APP.js", newTask);

    setTaskList((prevState) => [
      ...prevState,
      {
        ...newTask,
        dueDate: new Date(newTask.dueDate),
        id: "T-" + prevState.length + 1,
      },
    ]);
  };

  return (
    <div className="wrapper">
      <div className="app-container">
        <div className="app-content">
          <TaskViewer taskList={taskList} />

          <div className="side-bar-right">
            <div className="card-xl">
              <h3 className="h3">Create task</h3>
              <CreateTaskForm addNewTask={onNewTaskAdd} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
