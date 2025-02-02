package com.abhishek.VehicalRentalSystem.services.admin;

import com.abhishek.VehicalRentalSystem.dto.UserDto;
import com.abhishek.VehicalRentalSystem.dto.requests.CreateVehicleRequest;
import com.abhishek.VehicalRentalSystem.entities.Booking;
import com.abhishek.VehicalRentalSystem.entities.Vehicle;
import com.abhishek.VehicalRentalSystem.enums.BOOKING_STATUS;

import java.util.List;

public interface AdminService {


    // Get Admin Profile
    UserDto getAdminProfile(String token);

    // Manage vehicles
    Vehicle addVehicle(CreateVehicleRequest createVehicleRequest);
    Vehicle updateVehicle(Long vehicleId, CreateVehicleRequest updatedVehicle);
    void deleteVehicle(Long vehicleId);
    List<Vehicle> getAllVehicles();
    Vehicle getVehicleById(Long vehicleId);
    List<Vehicle> searchVehicles(String keyword);

    // Manage bookings
    List<Booking> getAllBookings();
    Booking updateBookingStatus(Long bookingId, BOOKING_STATUS status, String token);  // Added token parameter
    List<Booking> getBookingsByStatus(BOOKING_STATUS status);
}
