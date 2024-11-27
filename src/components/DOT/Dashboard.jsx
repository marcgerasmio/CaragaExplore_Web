import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open Modal
  const handleViewClick = () => {
    setIsModalOpen(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative z-10 container mx-auto px-8 py-6 font-mono bg-slate-200 h-screen">
        <div className="bg-white bg-opacity-80 backdrop-blur-sm p-10 rounded-lg shadow-xl border">
          <div className="p-6 bg-white rounded">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-800 tracking-wider">
                DOT Dashboard
              </h1>
              <div className="flex gap-3">
                <button
                  className="btn btn-circle btn-ghost"
                  aria-label="Sign Out"
                >
                  <FaSignOutAlt size={22} />
                </button>
              </div>
            </div>

            <div role="tablist" className="tabs tabs-lifted">
              <input
                type="radio"
                name="my_tabs"
                role="tab"
                className="tab"
                aria-label="Pending"
                id="tab1"
                defaultChecked
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
                <div className="overflow-x-auto">
                  <div className="overflow-x-auto bg-white shadow-md rounded-lg">
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

              <input
                type="radio"
                name="my_tabs"
                role="tab"
                className="tab"
                aria-label="Approved"
                id="tab2"
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
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
                          <button className="btn btn-outline btn-success btn-sm">
                            Approved
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
        </div>
      </div>

      {/* Modal for viewing spot image */}
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

export default Dashboard;
