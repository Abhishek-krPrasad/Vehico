import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { addVehicleService } from "../../components/config/api";

const AddVehicleModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    make: "",
    model: "",
    type: "",
    fuelType: "",
    capacity: 0,
    description: "",
    images: [],
    pricePerDay: 0,
    isAvailable: true,
  });

  const vehicleTypes = ["CAR", "BIKE", "TRUCK", "BUS", "VAN", "SUV", "ELECTRIC_SCOOTER"];
  const fuelTypes = ["PETROL", "DIESEL", "ELECTRIC", "HYBRID", "CNG"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "capacity" || name === "pricePerDay" ? parseFloat(value) : value,
    }));
  };

  const handleFormSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      // Call the addVehicleService with form data
      const result = await addVehicleService(token,formData); // Call the service method
      console.log("Vehicle added successfully:", result);
  
      // Close the modal on successful submission
      onClose();
    } catch (error) {
      // Handle error (e.g., show an error message to the user)
      console.error("Error adding vehicle:", error);
    }
  };
  

  return (
    <Modal open={open} onClose={onClose}>
      <Box
          className="rounded p-4 w-3/4 max-w-xl mx-auto mt-20 shadow-lg"
          sx={{
          backgroundColor: "#000000",
          color: "black",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.8)",
          borderRadius: "16px",
          padding: "16px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 6px 30px rgba(0, 0, 0, 1)",
          },
        }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Add Vehicle</h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          {/* Name Field */}
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />
          {/* Make Field */}
          <TextField
            label="Make"
            name="make"
            value={formData.make}
            onChange={handleChange}
            fullWidth
            required
          />
          {/* Model Field */}
          <TextField
            label="Model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            fullWidth
            required
          />
          {/* Type Field */}
          <FormControl fullWidth required>
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              labelId="type-label"
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              {vehicleTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* Fuel Type Field */}
          <FormControl fullWidth required>
            <InputLabel id="fuelType-label">Fuel Type</InputLabel>
            <Select
              labelId="fuelType-label"
              name="fuelType"
              value={formData.fuelType}
              onChange={handleChange}
            >
              {fuelTypes.map((fuel) => (
                <MenuItem key={fuel} value={fuel}>
                  {fuel}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* Capacity Field */}
          <TextField
            label="Capacity"
            name="capacity"
            type="number"
            value={formData.capacity}
            onChange={handleChange}
            fullWidth
            required
          />
          {/* Price Per Day Field */}
          <TextField
            label="Price Per Day"
            name="pricePerDay"
            type="number"
            value={formData.pricePerDay}
            onChange={handleChange}
            fullWidth
            required
          />
          {/* Description Field */}
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={3}
            fullWidth
          />
          {/* Images Field */}
          <TextField
            label="Images (comma-separated URLs)"
            name="images"
            value={formData.images.join(",")}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                images: e.target.value.split(","),
              }))
            }
            fullWidth
          />
          {/* Buttons */}
          <div className="col-span-2 flex justify-end space-x-4">
            <Button variant="outlined" size="large" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleFormSubmit}
            >
              Submit
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default AddVehicleModal;
