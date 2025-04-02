import React, { useContext, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { TaskContext } from "../context/TaskContext";

const TaskItem = ({ task, index }) => {
  const { removeTask, toggleTask, moveTask } = useContext(TaskContext);
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "TASK",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveTask(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id: task.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`flex justify-between items-center p-4 rounded-lg shadow-md transition-all my-2  ${
        isDragging ? "opacity-40" : "bg-white/30 backdrop-blur-md hover:bg-white/40"
      }`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="mr-3 w-5 h-5 accent-blue-500"
      />
      <span
        className={`flex-grow text-lg font-medium ${
          task.completed ? "line-through text-gray-400" : "text-white"
        }`}
      >
        {task.text}
      </span>
      <button onClick={() => removeTask(task.id)} className="text-red-400 hover:text-red-500">
        ❌
      </button>
    </div>
  );
};



export default TaskItem;
