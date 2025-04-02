import React, { useContext } from "react";
import TaskItem from "./TaskItem";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, filter } = useContext(TaskContext);

  const filteredTasks = tasks.filter(task =>
    filter === "all" ? true : filter === "completed" ? task.completed : !task.completed
  );

  return (
    <div className="mt-4 max-h-80 overflow-y-auto p-2 rounded-lg bg-white/10 no-scrollbar">
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task, index) => (
          <TaskItem key={task.id} task={task} index={index} />
        ))
      ) : (
        <p className="text-center text-gray-700">No tasks found</p>
      )}
    </div>
  );
};

export default TaskList;
