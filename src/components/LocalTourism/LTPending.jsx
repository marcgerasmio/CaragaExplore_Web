import { useState, useEffect } from "react";
import Sidebar from "./Sidebar.jsx";
import supabase from "../supabaseClient.jsx";

const LTPending = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState(null);
  const id = sessionStorage.getItem("id");

  const fetch_data = async () => {
    try {
      const { error, data } = await supabase
        .from('Spots')
        .select('*')
        .eq('status', 'Pending')
        .eq('local_id', id);

      if (error) throw error;
      setData(data);
    } catch (error) {
      alert("An unexpected error occurred.");
      console.error('Error during fetching history:', error.message);
    }
  };

  const handleViewClick = (spot) => {
    setSelectedSpot(spot);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetch_data();
  }, []);

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
                {data.map((spot, index) => (
                  <tr key={spot.id}>
                    <th>{index + 1}</th>
                    <td>{spot.spot_name}</td>
                    <td>{spot.spot_location}</td>
                    <td>{spot.spot_type}</td>
                    <td>
                      <button className="btn btn-outline btn-warning btn-sm">
                        Pending
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm text-white"
                        onClick={() => handleViewClick(spot)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && selectedSpot && (
        <div className="modal modal-open font-mono">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{selectedSpot.spot_name}</h3>
            <img
              src={selectedSpot.image_link}
              alt={selectedSpot.touristSpotName}
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
