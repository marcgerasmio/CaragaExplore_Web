import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import supabase from "../supabaseClient.jsx";
import {
  FaUsers,
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaFileUpload } from "react-icons/fa";

const LTDashboard = () => {
  const id = sessionStorage.getItem("id"); 
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [spots, setSpotData] = useState([]);
  const [total, setTotal] = useState('');
  const [pending, setPending] = useState('');
  const [approved, setApproved] = useState('');

  const fetch_data = async () => {
    try {
      const { error, data } = await supabase
        .from('Spots')
        .select('*')
        .eq('status', 'Approved')
        .eq('local_id', id);

      if (error) throw error;
      setSpotData(data);
    } catch (error) {
      alert("An unexpected error occurred.");
      console.error('Error during fetching data:', error.message);
    }
  };

  const stats = async () => {
    try {
      const { error, data } = await supabase
        .from('Spots')
        .select('*')
        .eq('local_id', id);
  
      if (error) throw error;
  
      const totalLength = data.length;
      const pendingCount = data.filter(item => item.status === 'Pending').length;
      const approvedCount = data.filter(item => item.status === 'Approved').length;
  
      setTotal(totalLength);
      setPending(pendingCount);
      setApproved(approvedCount);
  
      return { totalLength, pendingCount, approvedCount };
    } catch (error) {
      alert('An unexpected error occurred.');
      console.error('Error during fetching data:', error.message);
    }
  };
  

  useEffect(() => {
    fetch_data();
    stats();
  }, [id]); // Add id as a dependency to re-fetch if it changes

  return (
    <div className="flex h-screen bg-gray-100 font-mono">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="p-4 bg-white shadow-md flex items-center justify-end">
          <div className="flex items-center gap-4">
            {/* <div className="form-control">
              <input
                type="text"
                placeholder="Search..."
                className="input input-bordered w-full"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div> */}
          </div>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
              {[
                {
                  title: "Total Spots Uploaded",
                  count: total,
                  icon: <FaFileUpload className="text-3xl" />,
                  bgColor: "bg-orange-400",
                },
                {
                  title: "Pending Spots",
                  count:  pending,
                  icon: <MdOutlinePendingActions className="text-3xl" />,
                  bgColor: "bg-orange-400",
                },
                {
                  title: "Approved Spots",
                  count: approved,
                  icon: <FaCheckCircle className="text-3xl" />,
                  bgColor: "bg-orange-400",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${item.bgColor} rounded-lg shadow-lg p-4 lg:p-6 text-white`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl lg:text-4xl font-bold">
                      {item.count}
                    </h3>
                    <span className="text-xl lg:text-2xl">{item.icon}</span>
                  </div>
                  <p className="text-xs lg:text-sm mt-2">{item.title}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <h2 className="text-lg font-bold">Tourist Spots Posted</h2>
              {/* <div className="mb-4 flex items-center gap-4">
                <label htmlFor="filter" className="mr-2">
                  Filter by Type:
                </label>
                <select
                  id="filter"
                  value={filter}
                  onChange={handleFilterChange}
                  className="select select-bordered"
                >
                  <option value="All">All</option>
                  <option value="Beach">Beach</option>
                  <option value="Falls">Falls</option>
                  <option value="Farm">Farm</option>
                  <option value="Resort">Resort</option>
                </select>
              </div> */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {spots.map((spot) => (
                <div
                  key={spot.id}
                  className="bg-white shadow-md rounded-md overflow-hidden"
                >
                  <img
                    src={spot.image_link}
                    alt={spot.name || "Spot Image"}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{spot.spot_name}</h3>
                    <p className="text-sm text-gray-600">
                      <span className="font-bold">Type:</span> {spot.spot_type}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-bold">Location:</span>{" "}
                      {spot.spot_location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default LTDashboard;
