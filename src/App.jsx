import React, { useState } from "react";
import "./App.css";
import TaskViewer from "./components/task-viewer/TaskViewer";
import CreateTaskForm from "./components/forms/CreateTaskForm";
import Modal from "./components/modal/Modal";

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
    status: "Completed",
    dueDate: new Date(2022, 6, 13),
  },
  {
    id: "T-4",
    name: "14 Create a Design System for Enum Workspace",
    status: "Completed",
    dueDate: new Date(2022, 6, 13),
  },

  {
    id: "T-5",
    name: "13 Create a Design System for Enum Workspace",
    status: "Pending",
    dueDate: new Date(2022, 6, 13),
  },
  {
    id: "T-6",
    name: "14 Create a Design System for Enum Workspace",
    status: "Completed",
    dueDate: new Date(2022, 6, 13),
  },
];

function App() {
  const [taskList, setTaskList] = useState([]);
  // const [isOpen, setIsOpen] = useState(false);

  const onNewTaskAdd = (newTask) => {
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
    <div className="app-container">
      <div className="app-content">
        <TaskViewer onNewTaskAdd={onNewTaskAdd} taskList={taskList} />
      </div>
    </div>
  );
}

export default App;
