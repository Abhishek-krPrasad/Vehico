import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RequestVehicleBookingModal from "../Booking/RequestVehicleBookingModal";
import { useNavigate } from "react-router-dom";

const VehicleDetailsCard = ({ vehicle }) => {
  const { name, make, model, type, fuelType, capacity, description, pricePerDay, imageUrl, id } = vehicle;

  // State to manage the modal open/close
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();


  // Function to handle modal open
  const handleOpenModal = () => {
    const token = localStorage.getItem("token"); // Check for token in localStorage

    if (!token) {
      navigate("/account/login"); // Redirect to login if no token
      return;
    }
    setOpenModal(true);
  };

  // Function to handle modal close
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Function to handle the form submission from the modal
  const handleSubmitBooking = (bookingDetails) => {
    // Logic to submit booking (e.g., API call to submit booking request)
    console.log("Booking details submitted:", bookingDetails);
    // After submission, you can close the modal
    handleCloseModal();
  };

  return (
    <div>
      {/* Vehicle Details Accordion */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:gap-5">
              <img className="w-[7rem] h-[7rem] object-cover" src={imageUrl} alt={name} />
              <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                <p className="font-semibold text-xl">{name}</p>
                <p className="font-semibold text-sm">₹{pricePerDay}</p>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails className="w-full flex justify-between">
          <div className="flex w-[80%] justify-between">
            <div className="text-gray-400 font-mono text-sm">
              <p>Make : {make}</p>
              <p>Model : {model}</p>
              <p>Type : {type}</p>
            </div>
            <div className="text-gray-400 font-mono text-sm ml-20">
              <p>Capacity : {capacity}</p>
              <p>Fuel type : {fuelType}</p>
            </div>
          </div>
          <div className="mr-5">
            {/* Book button to trigger modal */}
            <Button variant="contained" onClick={handleOpenModal}>
              Book
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>

      {/* Request Vehicle Booking Modal */}
      <RequestVehicleBookingModal
        open={openModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmitBooking}
        selectedVehicleId={id}
        selectedVehicleName={name}
        pricePerDay={pricePerDay}
      />
    </div>
  );
};

export default VehicleDetailsCard;
