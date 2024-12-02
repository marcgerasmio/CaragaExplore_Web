import React, { useState, useEffect } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import supabase from "../supabaseClient"; 
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingSpots, setPendingSpots] = useState([]);
  const [approvedSpots, setApprovedSpots] = useState([]);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const [comment, setComment] = useState('');


  const handleViewClick = (spot) => {
    setSelectedImage(spot.image_link)
    setSelectedId(spot.id)
    setIsModalOpen(true);
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Fetch spots data from Supabase
  const fetchSpots = async () => {
    try {
      // Fetching spots with status Pending or Approved
      const { data, error } = await supabase
        .from('Spots')
        .select('*')
        .in('status', ['Pending', 'Approved']); // Filter by Pending or Approved status

      if (error) {
        throw error;
      }
      const pending = data.filter(spot => spot.status === 'Pending');
      const approved = data.filter(spot => spot.status === 'Approved');

      setPendingSpots(pending);
      setApprovedSpots(approved);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const accept = async () => {
    try {
      const { error } = await supabase
        .from("Spots")
        .update({
        status : 'Approved',
        comment,
        })
        .eq("id", selectedId);
      if (error) throw error;
window.location.reload();
    } catch (error) {
      alert("Error updating data.");
      console.error("Error during update:", error.message);
    }
  };

  const reject = async () => {
    try {
      const { error } = await supabase
        .from("Spots")
        .update({
        status : 'Rejected',
        comment,
        })
        .eq("id", selectedId);
      if (error) throw error;
window.location.reload();
    } catch (error) {
      alert("Error updating data.");
      console.error("Error during update:", error.message);
    }
  };

  // Fetch spots on component mount
  useEffect(() => {
    fetchSpots();
  }, []);

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
                <NavLink to="/">
                <button
                  className="btn btn-circle btn-ghost"
                  aria-label="Sign Out"
                >
                  <FaSignOutAlt size={22} />
                </button>
                </NavLink>
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
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pendingSpots.length > 0 ? (
                          pendingSpots.map((spot, index) => (
                            <tr key={spot.id}>
                              <th>{index + 1}</th>
                              <td>{spot.spot_name}</td>
                              <td>{spot.spot_location}</td>
                              <td>{spot.spot_type}</td>
                              <td>
                              <div className="flex space-x-2">
                              <button
                                className="btn btn-primary btn-sm text-white"
                                onClick={() => handleViewClick(spot)}
                              >
                               View
                              </button>
                          
                            </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="6">No Pending Spots</td>
                          </tr>
                        )}
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
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {approvedSpots.length > 0 ? (
                        approvedSpots.map((spot, index) => (
                          <tr key={spot.id}>
                            <th>{index + 1}</th>
                            <td>{spot.spot_name}</td>
                              <td>{spot.spot_location}</td>
                              <td>{spot.spot_type}</td>
                            <td>
                              <button
                                className="btn btn-primary btn-sm text-white"
                                onClick={() => handleViewClick(spot)}
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6">No Approved Spots</td>
                        </tr>
                      )}
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
            <h3 className="font-bold text-lg"></h3>
            <img
              src={selectedImage}
              alt="Spot Image"
              className="w-full h-auto rounded-lg my-4"
            />
             <input
                type="text"
                value={comment}
                placeholder="Add Comment"
                className="input input-bordered w-full"
                onChange={(e) => setComment(e.target.value)}
              />
        <div className="modal-action flex justify-between items-center">
          <button
            className="btn bg-blue-500 text-white"
            onClick={handleCloseModal}
          >
            Close
          </button>

          <div className="flex space-x-2">
            <button
              className="btn btn-error text-white"
             onClick={reject}
            >
              Reject
            </button>
            <button
              className="btn btn-success text-white"
             onClick={accept}
            >
              Accept
            </button>
          </div>
        </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
