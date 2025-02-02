package com.abhishek.VehicalRentalSystem.services.customer;

import com.abhishek.VehicalRentalSystem.dto.UserDto;
import com.abhishek.VehicalRentalSystem.dto.requests.BookingRequest;
import com.abhishek.VehicalRentalSystem.entities.Booking;
import com.abhishek.VehicalRentalSystem.entities.Vehicle;

import java.util.List;

public interface CustomerService {


    UserDto getCustomerProfile(String token);

    // Get all available vehicles
    List<Vehicle> getAllAvailableVehicles(String type);

    // Get vehicle details by ID
    Vehicle getVehicleById(Long vehicleId);

    // Create a booking
    Booking createBooking(BookingRequest bookingRequest, String token); // Pass the token for validation or user extraction

    // Get all bookings of the customer
    List<Booking> getCustomerBookings(Long userId, String token); // Pass the token to get customer-specific bookings

    // Get details of a specific booking
    Booking getBookingById(Long bookingId);

    // Cancel a booking
    boolean cancelBooking(Long bookingId, String token); // Token needed to verify the user before canceling

    // Search for vehicles
    List<Vehicle> searchVehicles(String keyword);
}
