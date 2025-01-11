import React, { useEffect, useState } from "react";
import Modal from "../../Modal";
import { saveHotel } from "../../../service/HotelService";

export default function AddModal() {
  const [open, setOpen] = useState(false);
  const [request, setRequest] = useState(new FormData());
  const [hotelDtoObj, setHotelDtoObj] = useState({
    name: "",
    location: "",
    stars: 0,
    files: [],
    roomsNumber: 0,
  });



  const handleChange = (event) => {

    const { name, value, files } = event.target;

  if (name === "files" && files) {
    const fileArray = Array.from(files); // Convert FileList to Array
    setHotelDtoObj((prevState) => ({
      ...prevState,
      files: fileArray,
    }));

    // Debugging: Log selected files
    console.log("Files selected:", fileArray);
  } else if (name === "stars" || name === "roomsNumber") {
    setHotelDtoObj((prevState) => ({
      ...prevState,
      [name]: parseFloat(value),
    }));
  } else {
    setHotelDtoObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
};



  useEffect(() => {
    const formData = new FormData();
  
    // Append hotel details
    formData.append("name", hotelDtoObj.name);
    formData.append("location", hotelDtoObj.location);
    formData.append("stars", hotelDtoObj.stars.toString());
    formData.append("roomsNumber", hotelDtoObj.roomsNumber.toString());
  
    // Append hotel images with a distinct key
    hotelDtoObj.files.forEach((file) => {
      formData.append("files", file); // Use "hotelFiles" as the key
    });
  
  
    setRequest(formData);
  
    // Log FormData for debugging
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }



  }, [hotelDtoObj]);


  // Submit the form data to the backend
  const handleSubmit = async () => {

    console.log("Submitting FormData: ", request);

    try {
      const response = await saveHotel(request);
      console.log("Hotel saved successfully:", response);
      setOpen(false); // Close the modal after successful submission
    } catch (error) {
      console.error("Failed to save hotel:", error);
    }

  };

  return (
    <div>
      <button className="bg-cyan-100 rounded-lg p-2" onClick={() => setOpen(true)}>
        + hotel
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              className="border-2 rounded-lg p-1"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Location: </label>
            <input
              type="text"
              name="location"
              className="border-2 rounded-lg p-1"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Stars: </label>
            <input
              type="number"
              name="stars"
              className="border-2 rounded-lg p-1"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Rooms Number: </label>
            <input
              type="number"
              name="roomsNumber"
              className="border-2 rounded-lg p-1"
              onChange={handleChange}
            />
          </div>

          <div className="mb-10">
            <label>Pictures: </label>
            <input
              type="file"
              name="files"
              className="border-2 rounded-lg p-1"
              multiple
              onChange={handleChange}
            />
          </div>

          {hotelDtoObj.files && hotelDtoObj.files.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold">Selected Files:</h3>
              <ul className="list-disc list-inside">
                {hotelDtoObj.files.map((file, index) => (
                  <li key={index} className="text-sm text-gray-700">
                    {file.name} {/* Display the file name */}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button onClick={handleSubmit} className="mt-4 bg-cyan-200 p-2 rounded-xl">
            Save Hotel
          </button>
        </div>
      </Modal>

    
    </div>
  );
}
