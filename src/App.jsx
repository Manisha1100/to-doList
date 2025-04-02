import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";

const App = () => {
  return (
    <TaskProvider>
      <DndProvider backend={HTML5Backend}>
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 to-[#e9edf5]">
          <div className="w-full max-w-lg bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20">
            <h1 className="text-3xl font-extrabold text-white text-center mb-6"> To-Do App</h1>
            <TaskForm />
            <FilterButtons />
            <TaskList />
          </div>
        </div>
      </DndProvider>
    </TaskProvider>
  );
};


export default App;
