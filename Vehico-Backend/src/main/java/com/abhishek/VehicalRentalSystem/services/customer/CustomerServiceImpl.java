package com.abhishek.VehicalRentalSystem.services.customer;

import com.abhishek.VehicalRentalSystem.dto.UserDto;
import com.abhishek.VehicalRentalSystem.dto.requests.BookingRequest;
import com.abhishek.VehicalRentalSystem.entities.Booking;
import com.abhishek.VehicalRentalSystem.entities.User;
import com.abhishek.VehicalRentalSystem.entities.Vehicle;
import com.abhishek.VehicalRentalSystem.repositories.UserRepository;
import com.abhishek.VehicalRentalSystem.services.booking.BookingService;
import com.abhishek.VehicalRentalSystem.services.vehicle.VehicleService;
import com.abhishek.VehicalRentalSystem.utils.JwtUtil;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService {

    private final VehicleService vehicleService;
    private final BookingService bookingService;
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    public CustomerServiceImpl(VehicleService vehicleService, BookingService bookingService, UserRepository userRepository, JwtUtil jwtUtil) {
        this.vehicleService = vehicleService;
        this.bookingService = bookingService;
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    @Override
    public UserDto getCustomerProfile(String token) {
        String email = jwtUtil.extractUserName(token);
        Optional<User> user = userRepository.findFirstByEmail(email);

            UserDto userDto = new UserDto();
            userDto.setName(user.get().getFullName());
            userDto.setEmail(user.get().getEmail());
            userDto.setBookings(user.get().getBookings());

            return userDto;
    }

    @Override
    public List<Vehicle> getAllAvailableVehicles(String type) {
        return vehicleService.getAllVehicles(type);
    }

    @Override
    public Vehicle getVehicleById(Long vehicleId) {
        return vehicleService.getVehicleById(vehicleId);
    }

    @Override
    public Booking createBooking(BookingRequest bookingRequest, String token) {
        // Pass the token to the booking service
        return bookingService.createBooking(bookingRequest, token);
    }

    @Override
    public List<Booking> getCustomerBookings(Long userId, String token) {
        // Pass the token to the booking service to get customer-specific bookings
        return bookingService.getBookingsByUser(token);
    }

    @Override
    public Booking getBookingById(Long bookingId) {
        return bookingService.getBookingById(bookingId);
    }

    @Override
    public boolean cancelBooking(Long bookingId, String token) {
        // Pass the token to cancel booking for the correct user
        return bookingService.cancelBooking(bookingId, token);
    }

    @Override
    public List<Vehicle> searchVehicles(String keyword) {
        return vehicleService.searchVehicle(keyword);
    }
}
