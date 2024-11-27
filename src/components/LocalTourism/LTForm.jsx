import Sidebar from "./Sidebar";
import { useState } from "react";

const LTForm = () => {
  const [formData, setFormData] = useState({
    touristSpotName: "",
    category: "",
    location: "",
    description: "",
    amenities: [],
    contact: {
      email: "",
      phone: "",
      socialMedia: "",
    },
    operatingHours: {
      opening: "",
      closing: "",
    },
    photos: [],
    status: "Draft",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      amenities: checked
        ? [...prevData.amenities, name]
        : prevData.amenities.filter((item) => item !== name),
    }));
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevData) => ({
      ...prevData,
      photos: [...prevData.photos, ...files],
    }));
  };

  const handleSubmit = () => {
    setFormData((prevData) => ({ ...prevData, status: "Submitted" }));
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-100 to-blue-100 font-mono">
      <Sidebar />
      <div className="flex-1 flex flex-col p-6 space-y-6 overflow-y-auto">
        <div className="bg-white shadow-xl rounded-lg p-8 space-y-6 grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <h1 className="text-xl font-extrabold text-gray-500 col-span-full">
            Fill out the details below to add a new tourist spot.
          </h1>

          {/* General Information Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">
              General Information
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="touristSpotName"
                placeholder="Tourist Spot Name"
                className="input input-bordered w-full"
                onChange={handleInputChange}
              />
              <select
                name="category"
                className="select select-bordered w-full"
                onChange={handleInputChange}
              >
                <option value="">Select Category</option>
                <option value="beach">Beach</option>
                <option value="park">Park</option>
                <option value="cultural site">Cultural Site</option>
                <option value="event">Event</option>
              </select>
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="input input-bordered w-full"
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Photo Upload Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Photo Upload
            </h2>
            <input
              type="file"
              multiple
              className="file-input file-input-bordered w-full"
              onChange={handlePhotoUpload}
            />
            {/* Description Section */}
            <div className="space-y-4 col-span-full">
              <textarea
                name="description"
                placeholder="Brief Description"
                className="textarea textarea-bordered w-full"
                rows="4"
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Amenities and Features Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Amenities and Features
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Parking",
                "Restrooms",
                "Food Stalls",
                "Hiking",
                "Diving",
                "Cultural Performances",
              ].map((amenity) => (
                <label key={amenity} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name={amenity.toLowerCase().replace(" ", "_")}
                    className="checkbox checkbox-primary"
                    onChange={handleCheckboxChange}
                  />
                  <span className="text-gray-700">{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="email"
                name="contactEmail"
                placeholder="Email"
                className="input input-bordered w-full"
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    contact: { ...prevData.contact, email: e.target.value },
                  }))
                }
              />
              <input
                type="text"
                name="contactPhone"
                placeholder="Phone Number"
                className="input input-bordered w-full"
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    contact: { ...prevData.contact, phone: e.target.value },
                  }))
                }
              />
              <input
                type="text"
                name="contactSocialMedia"
                placeholder="Social Media Link"
                className="input input-bordered w-full"
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    contact: {
                      ...prevData.contact,
                      socialMedia: e.target.value,
                    },
                  }))
                }
              />
            </div>
          </div>

          {/* Submission Section */}
          <div className="space-y-4 col-span-full flex justify-end">
            <button
              className="btn btn-success text-white px-10"
              onClick={handleSubmit}
            >
              Submit for Approval
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LTForm;
