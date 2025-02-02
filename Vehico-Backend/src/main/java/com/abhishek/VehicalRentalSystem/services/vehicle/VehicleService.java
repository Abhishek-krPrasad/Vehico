package com.abhishek.VehicalRentalSystem.services.vehicle;


import com.abhishek.VehicalRentalSystem.dto.requests.CreateVehicleRequest;
import com.abhishek.VehicalRentalSystem.entities.Vehicle;

import java.util.List;

public interface VehicleService {

    // Add a new vehicle
    Vehicle addVehicle(CreateVehicleRequest createVehicleRequest);

    // Update an existing vehicle
    Vehicle updateVehicle(Long vehicleId, CreateVehicleRequest updatedVehicle);

    // Get details of a specific vehicle
    Vehicle getVehicleById(Long vehicleId);

    // Get all available vehicles
    List<Vehicle> getAllAvailableVehicles();

    // Get vehicles by type
    List<Vehicle> getAllVehicles(String type);

    // get vehicles by search
    List<Vehicle> searchVehicle(String keyword);

    // Delete a vehicle
    void deleteVehicle(Long vehicleId);

    // Update availability status of a vehicle
    Vehicle updateVehicleAvailability(Long vehicleId, boolean isAvailable);
}






