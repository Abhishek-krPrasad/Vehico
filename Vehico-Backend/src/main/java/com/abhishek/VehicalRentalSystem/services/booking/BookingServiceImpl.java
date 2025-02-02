package com.abhishek.VehicalRentalSystem.services.booking;

import com.abhishek.VehicalRentalSystem.dto.requests.BookingRequest;
import com.abhishek.VehicalRentalSystem.entities.Booking;
import com.abhishek.VehicalRentalSystem.entities.User;
import com.abhishek.VehicalRentalSystem.entities.Vehicle;
import com.abhishek.VehicalRentalSystem.enums.BOOKING_STATUS;
import com.abhishek.VehicalRentalSystem.repositories.BookingRepository;
import com.abhishek.VehicalRentalSystem.repositories.UserRepository;
import com.abhishek.VehicalRentalSystem.repositories.VehicleRepository;
import com.abhishek.VehicalRentalSystem.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    public Booking createBooking(BookingRequest bookingRequest, String token) {
        // Extract userId from token
        Long userId = Long.valueOf(jwtUtil.extractUserId(token));
        Optional<User> userOptional = userRepository.findById(userId);
        Optional<Vehicle> vehicleOptional = vehicleRepository.findById(bookingRequest.getVehicleId());

        if (userOptional.isPresent() && vehicleOptional.isPresent()) {
            // Create the booking entity
            User user = userOptional.get();
            Vehicle vehicle = vehicleOptional.get();

            Booking booking = new Booking();
            booking.setUser(user);
            booking.setVehicle(vehicle);
            booking.setStartDate(bookingRequest.getStartDate());
            booking.setEndDate(bookingRequest.getEndDate());
            booking.setTotalCost(bookingRequest.getTotalCost());
            booking.setStatus(BOOKING_STATUS.PENDING); // Default status to pending

            // Save the booking
            return bookingRepository.save(booking);
        }
        return null; // Handle failure, you can throw a custom exception here
    }

    @Override
    public List<Booking> getBookingsByUser(String token) {
        Long userId = Long.valueOf(jwtUtil.extractUserId(token));
        return bookingRepository.findByUser_UserId(userId);
    }

    @Override
    public List<Booking> getBookingsByVehicle(Long vehicleId) {
        return bookingRepository.findByVehicle_VehicleId(vehicleId);
    }

    @Override
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll(); // Admin use case
    }

    @Override
    public Booking updateBookingStatus(Long bookingId, BOOKING_STATUS status, String token) {
        Long userId = Long.valueOf(jwtUtil.extractUserId(token));
        Optional<Booking> bookingOptional = bookingRepository.findById(bookingId);

        if (bookingOptional.isPresent()) {
            Booking booking = bookingOptional.get();
            // Assuming only admins or the customer can modify the status
            if (status == BOOKING_STATUS.CONFIRMED || status == BOOKING_STATUS.REJECTED) {
                // Admin check can be done here or based on business logic
                booking.setStatus(status);
                return bookingRepository.save(booking);
            }
        }
        return null; // Handle failure
    }

    @Override
    public BigDecimal calculateTotalCost(Long vehicleId, Date startDate, Date endDate) {
        Optional<Vehicle> vehicleOptional = vehicleRepository.findById(vehicleId);
        if (vehicleOptional.isPresent()) {
            Vehicle vehicle = vehicleOptional.get();
            // Assuming price per day is available in the Vehicle entity
            long duration = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
            return vehicle.getPricePerDay().multiply(BigDecimal.valueOf(duration));
        }
        return BigDecimal.ZERO; // Handle failure
    }

    @Override
    public void updateVehicleAvailability(Long vehicleId, boolean isAvailable) {
        Optional<Vehicle> vehicleOptional = vehicleRepository.findById(vehicleId);
        if (vehicleOptional.isPresent()) {
            Vehicle vehicle = vehicleOptional.get();
            vehicle.setAvailable(isAvailable);
            vehicleRepository.save(vehicle);
        }
    }

    @Override
    public Booking getBookingById(Long bookingId) {
        Optional<Booking> bookingOptional = bookingRepository.findById(bookingId);
        return bookingOptional.orElse(null);
    }

    @Override
    public List<Booking> getBookingsByStatus(BOOKING_STATUS status) {
        return bookingRepository.findByStatus(status);
    }

    @Override
    public boolean cancelBooking(Long bookingId, String token) {
        Long userId = Long.valueOf(jwtUtil.extractUserId(token));
        Optional<Booking> bookingOptional = bookingRepository.findById(bookingId);

        if (bookingOptional.isPresent()) {
            Booking booking = bookingOptional.get();
            // Ensure the user is the one who made the booking
            if (booking.getUser().getUserId().equals(userId)) {
                bookingRepository.delete(booking);
                return true;
            }
        }
        return false; // Handle failure (user is not the owner of the booking)
    }
}
