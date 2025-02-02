package com.abhishek.VehicalRentalSystem.services.vehicle;

import com.abhishek.VehicalRentalSystem.dto.requests.CreateVehicleRequest;
import com.abhishek.VehicalRentalSystem.entities.Vehicle;
import com.abhishek.VehicalRentalSystem.enums.VEHICLE_TYPE;
import com.abhishek.VehicalRentalSystem.repositories.VehicleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleServiceImpl implements VehicleService {

    private final VehicleRepository vehicleRepository;

    public VehicleServiceImpl(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    @Override
    public Vehicle addVehicle(CreateVehicleRequest createVehicleRequest) {
        Vehicle vehicle = new Vehicle();
        vehicle.setName(createVehicleRequest.getName());
        vehicle.setMake(createVehicleRequest.getMake());
        vehicle.setModel(createVehicleRequest.getModel());
        vehicle.setType((createVehicleRequest.getType()));
        vehicle.setFuelType(createVehicleRequest.getFuelType());
        vehicle.setCapacity(createVehicleRequest.getCapacity());
        vehicle.setDescription(createVehicleRequest.getDescription());
        vehicle.setImages(createVehicleRequest.getImages());
        vehicle.setPricePerDay(createVehicleRequest.getPricePerDay());
        vehicle.setAvailable(true); // New vehicles are available by default
        return vehicleRepository.save(vehicle);
    }

    @Override
    public Vehicle updateVehicle(Long vehicleId, CreateVehicleRequest updatedVehicle) {
        Vehicle vehicle = vehicleRepository.findById(vehicleId)
                .orElseThrow(() -> new RuntimeException("Vehicle not found with id: " + vehicleId));
        vehicle.setName(updatedVehicle.getName());
        vehicle.setMake(updatedVehicle.getMake());
        vehicle.setModel(updatedVehicle.getModel());
        vehicle.setType(updatedVehicle.getType());
        vehicle.setFuelType(updatedVehicle.getFuelType());
        vehicle.setCapacity(updatedVehicle.getCapacity());
        vehicle.setDescription(updatedVehicle.getDescription());
        vehicle.setImages(updatedVehicle.getImages());
        vehicle.setPricePerDay(updatedVehicle.getPricePerDay());
        return vehicleRepository.save(vehicle);
    }

    @Override
    public Vehicle getVehicleById(Long vehicleId) {
        return vehicleRepository.findById(vehicleId)
                .orElseThrow(() -> new RuntimeException("Vehicle not found with id: " + vehicleId));
    }

    @Override
    public List<Vehicle> getAllAvailableVehicles() {
        return vehicleRepository.findByIsAvailable(true);
    }

    @Override
    public List<Vehicle> getAllVehicles(String type) {
        if (type == null || type.isEmpty()) {
            return vehicleRepository.findAll();
        }
        return vehicleRepository.findByType(VEHICLE_TYPE.valueOf(type.toUpperCase()));
    }

    @Override
    public List<Vehicle> searchVehicle(String keyword) {
        return vehicleRepository.findBySearchQuery(keyword);
    }

    @Override
    public void deleteVehicle(Long vehicleId) {
        Vehicle vehicle = vehicleRepository.findById(vehicleId)
                .orElseThrow(() -> new RuntimeException("Vehicle not found with id: " + vehicleId));
        vehicleRepository.delete(vehicle);
    }

    @Override
    public Vehicle updateVehicleAvailability(Long vehicleId, boolean isAvailable) {
        Vehicle vehicle = vehicleRepository.findById(vehicleId)
                .orElseThrow(() -> new RuntimeException("Vehicle not found with id: " + vehicleId));
        vehicle.setAvailable(isAvailable);
        return vehicleRepository.save(vehicle);
    }
}
