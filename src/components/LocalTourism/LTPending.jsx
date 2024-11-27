import { useState } from "react";
import Sidebar from "./Sidebar.jsx";

const LTPending = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex h-screen bg-gradient-to-r from-gray-100 to-gray-300 font-mono">
        <Sidebar />
        <div className="flex-1 flex flex-col p-6 space-y-6">
          <header className="bg-white shadow-md rounded-lg p-4">
            <h1 className="text-2xl font-bold text-gray-800">Pending List</h1>
            <p className="text-gray-600">Manage your pending items below</p>
          </header>

          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Spot Name</th>
                    <th>Address</th>
                    <th>Spot Category</th>
                    <th>Remarks</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Tinuy-an Falls</td>
                    <td>Barobo, Surigao Del Sur</td>
                    <td>Falls</td>
                    <td>
                      <button className="btn btn-outline btn-warning btn-sm">
                        Pending
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm text-white"
                        onClick={handleViewClick}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal modal-open font-mono">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Spot Image</h3>
            <img
              src="https://placehold.co/600x400"
              alt="Tinuy-an Falls"
              className="w-full h-auto rounded-lg my-4"
            />
            <div className="modal-action">
              <button
                className="btn btn-error text-white"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LTPending;
