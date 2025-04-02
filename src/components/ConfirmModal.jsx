import React from "react";

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-10 backdrop-blur-md z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
        <h2 className="text-lg font-semibold">Are you sure?</h2>
        <p className="text-gray-600">This will delete all tasks permanently.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
            onClick={onConfirm}
          >
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
