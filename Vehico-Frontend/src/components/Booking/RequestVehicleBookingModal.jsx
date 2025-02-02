import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerDarkTheme.css"; // Import the custom dark theme styles

const RequestVehicleBookingModal = ({ 
  open, 
  onClose, 
  onSubmit, 
  selectedVehicleId, 
  selectedVehicleName, 
  pricePerDay 
}) => {
  const [formData, setFormData] = useState({
    vehicleId: selectedVehicleId || "",
    vehicleName: selectedVehicleName || "",
    startDate: null,
    endDate: null,
    totalCost: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      vehicleId: selectedVehicleId,
      vehicleName: selectedVehicleName,
    }));
  }, [selectedVehicleId, selectedVehicleName]);

  useEffect(() => {
    if (formData.startDate && formData.endDate) {
      const days = Math.ceil(
        (formData.endDate - formData.startDate) / (1000 * 60 * 60 * 24)
      );
      const totalCost = days * pricePerDay;
      setFormData((prev) => ({
        ...prev,
        totalCost: totalCost > 0 ? totalCost.toFixed(2) : "",
      }));
    }
  }, [formData.startDate, formData.endDate, pricePerDay]);

  const validate = () => {
    const newErrors = {};

    if (!formData.startDate || formData.startDate < new Date())
      newErrors.startDate = "Start date must be a future date";
    if (!formData.endDate || formData.endDate <= formData.startDate)
      newErrors.endDate = "End date must be after the start date";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit(formData);
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "1rem",
        }}
      >
        <DialogTitle style={{ color: "white" }} className="text-xl font-semibold">
          Request Vehicle 
        </DialogTitle>
        <DialogContent className="space-y-4">
          {/* Vehicle ID */}
          <TextField
            label="Vehicle ID"
            value={formData.vehicleId}
            disabled
            fullWidth
            style={{ display: "none" }}
          />

          {/* Vehicle Name */}
          <TextField
            label="Vehicle Name"
            value={formData.vehicleName}
            disabled
            fullWidth
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
          />

          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Start Date</label>
            <DatePicker
              selected={formData.startDate}
              onChange={(date) => handleChange("startDate", date)}
              minDate={new Date()}
              dateFormat="dd-MM-yyyy" // Set date format
              className="w-full border rounded px-2 py-1 dark-datepicker"
            />
            {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-medium mb-1">End Date</label>
            <DatePicker
              selected={formData.endDate}
              onChange={(date) => handleChange("endDate", date)}
              minDate={formData.startDate || new Date()}
              dateFormat="dd-MM-yyyy" // Set date format
              className="w-full border rounded px-2 py-1 dark-datepicker"
            />
            {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>}
          </div>

          {/* Total Cost */}
          <TextField
            label="Total Cost"
            value={`₹${formData.totalCost}`}
            disabled
            fullWidth
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} style={{ color: "white", borderColor: "white" }} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleSubmit} style={{ backgroundColor: "white", color: "black" }} variant="contained">
            Submit
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default RequestVehicleBookingModal;
