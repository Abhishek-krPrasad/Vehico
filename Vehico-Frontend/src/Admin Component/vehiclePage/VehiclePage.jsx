import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddVehicleModal from "./AddVehicleModal";
import AllVehicle from "./AllVehicle";

const VehiclePage = () => {
  const [selectedTab, setSelectedTab] = useState("All Vehicles");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "All Vehicles":
        return <div><AllVehicle/></div>;
      case "Cars":
        return <div>Displaying all cars...</div>;
      case "Bikes":
        return <div>Displaying all bikes...</div>;
      default:
        return <div>Select a category to view details.</div>;
    }
  };

  const handleAddVehicle = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleVehicleSubmit = (formData) => {
    console.log("New Vehicle Data:", formData);
    // Add API call here to submit the data
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 font-sans">
      <div className="flex justify-between">
        {/* Tab Section */}
        <div className="flex space-x-4 mb-4">
          {["All Vehicles", "Cars", "Bikes"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 rounded ${
                selectedTab === tab
                  ? "bg-blue-500 text-white font-semibold"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Add Vehicle Button */}
        <div className="mb-4">
          <Button variant="contained" color="primary" onClick={handleAddVehicle}>
            Add Vehicle
          </Button>
        </div>
      </div>

      {/* Content Display */}
      <div className="flex-1 p-4 border border-gray-300 rounded overflow-auto">
        {renderContent()}
      </div>

      {/* Add Vehicle Modal */}
      <AddVehicleModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleVehicleSubmit}
      />
    </div>
  );
};

export default VehiclePage;
