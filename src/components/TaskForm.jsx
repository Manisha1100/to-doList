import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const [text, setText] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-5">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-3 border rounded-lg text-lg outline-none bg-white/30 backdrop-blur-md placeholder-gray-200 text-white"
        placeholder="Add a new task..."
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-5 py-3 rounded-lg text-lg shadow-md hover:bg-blue-600 transition-transform transform active:scale-95"
      >
        ➕ Add
      </button>
    </form>
  );
};


export default TaskForm;
