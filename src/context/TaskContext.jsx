import React, { createContext, useState, useEffect } from "react";
import update from "immutability-helper";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // useEffect(() => {
  //   setTasks([
  //     { id: 1, text: "Task 1", completed: false },
  //     { id: 2, text: "Task 2", completed: true },
  //   ]);
  // }, []);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const moveTask = (dragIndex, hoverIndex) => {
    const draggedTask = tasks[dragIndex];
    setTasks(
      update(tasks, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggedTask],
        ],
      })
    );
  };

  const clearAllTasks = () => {
    {
      setTasks([]);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        toggleTask,
        moveTask,
        filter,
        setFilter,
        clearAllTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
