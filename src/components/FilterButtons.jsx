import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import ConfirmModal from "./ConfirmModal";

const FilterButtons = () => {
  const { setFilter, clearAllTasks, tasks } = useContext(TaskContext);

  // Set active state to highlight the selected filter
  const [activeTab, setActiveTab] = useState("all");

  const handleFilterChange = (filter) => {
    setFilter(filter);
    setActiveTab(filter); // Set the active tab when filter is changed
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteAll = () => {
    setIsModalOpen(true); // Show modal
  };

  const confirmDelete = () => {
    clearAllTasks(); // Call the delete function
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className="flex justify-center gap-4 mt-4 my-4">
      {/* All Filter Tab */}
      <button
        onClick={() => handleFilterChange("all")}
        className={`px-6 py-2 rounded-full text-lg transition-all duration-300 ${
          activeTab === "all"
            ? "bg-blue-500 text-white shadow-lg"
            : "bg-gray-300 text-gray-700 hover:bg-blue-200"
        }`}
      >
        All
      </button>

      {/* Completed Filter Tab */}
      <button
        onClick={() => handleFilterChange("completed")}
        className={`px-6 py-2 rounded-full text-lg transition-all duration-300 ${
          activeTab === "completed"
            ? "bg-green-500 text-white shadow-lg"
            : "bg-gray-300 text-gray-700 hover:bg-green-200"
        }`}
      >
        Completed
      </button>

      {/* Pending Filter Tab */}
      <button
        onClick={() => handleFilterChange("pending")}
        className={`px-6 py-2 rounded-full text-lg transition-all duration-300 ${
          activeTab === "pending"
            ? "bg-red-500 text-white shadow-lg"
            : "bg-gray-300 text-gray-700 hover:bg-red-200"
        }`}
      >
        Pending
      </button>
      {tasks.length > 0 && (
        <button onClick={handleDeleteAll} className="px-2 py-2 rounded-full text-md  transition-all duration-300 bg-red-600">
          Delete All
        </button>
      )}
      {/* Custom Confirmation Modal */}
      <ConfirmModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={confirmDelete} 
      />
    </div>
  );
};



export default FilterButtons;
