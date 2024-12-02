import Sidebar from "./Sidebar";
import { useState } from "react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const LTForm = () => {
  const local_id = sessionStorage.getItem("id")
  const [touristSpotName, setTouristSpotName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [status, setStatus] = useState("Pending");
  const [file, setFile] = useState("");
  const [image_1, setImage1] = useState([]);
  const [image_2, setImage2] = useState([]);
  const [image_3, setImage3] = useState([]);
  const [image_4, setImage4] = useState([]);
  const [image_5, setImage5] = useState([]);
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAmenities((prevAmenities) =>
      checked
        ? [...prevAmenities, name]
        : prevAmenities.filter((item) => item !== name)
    );
  };


  const handlePhotoUpload = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      try {
        const filePath = `${selectedFile.name}`;
        const { data, error } = await supabase.storage
          .from("Images")
          .upload(filePath, selectedFile);
        if (error) {
          throw error;
        }
        const { data: publicURL, error: urlError } = supabase.storage
          .from("Images")
          .getPublicUrl(filePath);
        if (urlError) {
          throw urlError;
        }
        console.log("Image URL:", publicURL.publicUrl);
        setPhotos(publicURL.publicUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Error uploading image: " + error.message);
      }
    }
  };




  const handleSubmit = async () => {
    const { data, error } = await supabase
    .from('Spots')
    .insert([
      {
      spot_name: touristSpotName,
      spot_type : category,
      spot_location : location,
      description,
      amenities,
      image_1,
      image_2,
      image_3,
      image_4,
      image_5,
      image_link : photos,
      status : 'Pending',
      local_id,
      },
    ])
  if (error) {
    console.error('Error inserting data:', error);
    alert('Error inserting data');
  } else {
    console.log('Data inserted successfully:', data);
    navigate("/ltpending");
  }
  };

  const uploadImage1 = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      try {
        const filePath = `${selectedFile.name}`;
        const { data, error } = await supabase.storage
          .from("Images")
          .upload(filePath, selectedFile);
        if (error) {
          throw error;
        }
        const { data: publicURL, error: urlError } = supabase.storage
          .from("Images")
          .getPublicUrl(filePath);
        if (urlError) {
          throw urlError;
        }
        console.log("Image URL:", publicURL.publicUrl);
        setImage1(publicURL.publicUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Error uploading image: " + error.message);
      }
    }
  };

  const uploadImage2 = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      try {
        const filePath = `${selectedFile.name}`;
        const { data, error } = await supabase.storage
          .from("Images")
          .upload(filePath, selectedFile);
        if (error) {
          throw error;
        }
        const { data: publicURL, error: urlError } = supabase.storage
          .from("Images")
          .getPublicUrl(filePath);
        if (urlError) {
          throw urlError;
        }
        console.log("Image URL:", publicURL.publicUrl);
        setImage2(publicURL.publicUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Error uploading image: " + error.message);
      }
    }
  };

  const uploadImage3 = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      try {
        const filePath = `${selectedFile.name}`;
        const { data, error } = await supabase.storage
          .from("Images")
          .upload(filePath, selectedFile);
        if (error) {
          throw error;
        }
        const { data: publicURL, error: urlError } = supabase.storage
          .from("Images")
          .getPublicUrl(filePath);
        if (urlError) {
          throw urlError;
        }
        console.log("Image URL:", publicURL.publicUrl);
        setImage3(publicURL.publicUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Error uploading image: " + error.message);
      }
    }
  };

  const uploadImage4 = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      try {
        const filePath = `${selectedFile.name}`;
        const { data, error } = await supabase.storage
          .from("Images")
          .upload(filePath, selectedFile);
        if (error) {
          throw error;
        }
        const { data: publicURL, error: urlError } = supabase.storage
          .from("Images")
          .getPublicUrl(filePath);
        if (urlError) {
          throw urlError;
        }
        console.log("Image URL:", publicURL.publicUrl);
        setImage4(publicURL.publicUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Error uploading image: " + error.message);
      }
    }
  };

  const uploadImage5 = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      try {
        const filePath = `${selectedFile.name}`;
        const { data, error } = await supabase.storage
          .from("Images")
          .upload(filePath, selectedFile);
        if (error) {
          throw error;
        }
        const { data: publicURL, error: urlError } = supabase.storage
          .from("Images")
          .getPublicUrl(filePath);
        if (urlError) {
          throw urlError;
        }
        console.log("Image URL:", publicURL.publicUrl);
        setImage5(publicURL.publicUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Error uploading image: " + error.message);
      }
    }
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
                value={touristSpotName}
                placeholder="Tourist Spot Name"
                className="input input-bordered w-full"
                onChange={(e) => setTouristSpotName(e.target.value)}
              />
              <select
                value={category}
                className="select select-bordered w-full"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Beaches">Beach</option>
                <option value="Falls">Falls</option>
                <option value="Farm">Farm</option>
                <option value="Resort">Resort</option>
                <option value="Island">Island</option>
              </select>
              <input
                type="text"
                value={location}
                placeholder="Location"
                className="input input-bordered w-full"
                onChange={(e) => setLocation(e.target.value)}
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
                value={description}
                placeholder="Brief Description"
                className="textarea textarea-bordered w-full"
                rows="4"
                onChange={(e) => setDescription(e.target.value)}
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
                "Cottages",
                "Rooms",
                "Pool",
                "Bamboo House",
                "Bar",
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
              Additional Images
            </h2>
            <div className="grid grid-cols-1 gap-4">
            <input
              type="file"
              multiple
              className="file-input file-input-bordered w-full"
              onChange={uploadImage1}
            />
               <input
              type="file"
              multiple
              className="file-input file-input-bordered w-full"
              onChange={uploadImage2}
            />
               <input
              type="file"
              multiple
              className="file-input file-input-bordered w-full"
              onChange={uploadImage3}
            />
               <input
              type="file"
              multiple
              className="file-input file-input-bordered w-full"
              onChange={uploadImage4}
            />
               <input
              type="file"
              multiple
              className="file-input file-input-bordered w-full"
              onChange={uploadImage5}
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
