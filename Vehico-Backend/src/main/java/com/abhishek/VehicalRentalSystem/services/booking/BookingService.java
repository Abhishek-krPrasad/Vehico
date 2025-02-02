package com.abhishek.VehicalRentalSystem.services.booking;

import com.abhishek.VehicalRentalSystem.dto.requests.BookingRequest;
import com.abhishek.VehicalRentalSystem.entities.Booking;
import com.abhishek.VehicalRentalSystem.enums.BOOKING_STATUS;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

public interface BookingService {

    // Create a new booking request
    Booking createBooking(BookingRequest bookingRequest, String token);

    // Get all bookings of a user (Extract userId from token)
    List<Booking> getBookingsByUser(String token);

    // Get all bookings for a vehicle
    List<Booking> getBookingsByVehicle(Long vehicleId);

    // Get all bookings (admin only)
    List<Booking> getAllBookings();

    // Accept or reject a booking request (Extract userId from token if needed for validation)
    Booking updateBookingStatus(Long bookingId, BOOKING_STATUS status, String token);

    // Calculate the total cost of a booking based on the vehicle price and duration
    BigDecimal calculateTotalCost(Long vehicleId, Date startDate, Date endDate);

    // Update the availability of a vehicle after a booking is accepted or rejected
    void updateVehicleAvailability(Long vehicleId, boolean isAvailable);

    // Get the booking details by booking ID
    Booking getBookingById(Long bookingId);

    // Get bookings by status
    List<Booking> getBookingsByStatus(BOOKING_STATUS status);

    // Cancel a booking by its ID (Extract userId from token to check ownership)
    boolean cancelBooking(Long bookingId, String token);
}
