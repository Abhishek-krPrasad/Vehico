import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Chip } from "@mui/material";
import RequestVehicleBookingModal from "../Booking/RequestVehicleBookingModal";
import { sendBookingRequest } from "../config/api";

const VehicleCard = ({ image, name, description, price, vehicleId, isAvailable }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleBookClick = () => {
    const token = localStorage.getItem("token"); // Check for token in localStorage

    if (!token) {
      navigate("/account/login"); // Redirect to login if no token
      return;
    }

    if (isAvailable) {
      setModalOpen(true);
    } else {
      alert("This vehicle is not available for booking.");
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmitBooking = async (bookingData) => {
    console.log("Booking Data Submitted:", bookingData);
    // Add logic to send bookingData to the server
        try {
          // Await the promise to get the resolved response
          const res = await sendBookingRequest(bookingData);
          console.log(res);
      
        } catch (error) {
          console.log(error);
        }
    setModalOpen(false);
  };

  return (
    <>
      <Card className="m-5 w-[22rem] h-[24rem]">
        <div className={`${isAvailable ? "cursor-pointer" : "cursor-not-allowed"} relative`}>
          <img className="w-full h-[12rem] rounded-t-md object-cover" src={image} alt="" />
          <Chip
            size="small"
            className="absolute top-2 left-2"
            color={isAvailable ? "success" : "error"}
            label={isAvailable ? "Available" : "Not Available"}
          />
        </div>
        <div className="p-4 textPart lg:flex w-full justify-between">
          <div className="space-y-1">
            <p className="font-semibold text-lg">{name}</p>
            <p className="text-gray-500 text-sm">{description}</p>
          </div>
          <div className="flex justify-between flex-wrap">
            <span>₹{price}</span>
            <Button variant="contained" sx={{ height: "2rem" }} onClick={handleBookClick}>
              Book
            </Button>
          </div>
        </div>
      </Card>

      {/* Booking Modal */}
      <RequestVehicleBookingModal
        open={modalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitBooking}
        selectedVehicleId={vehicleId}
        selectedVehicleName={name}
        pricePerDay={price}
      />
    </>
  );
};

export default VehicleCard;
