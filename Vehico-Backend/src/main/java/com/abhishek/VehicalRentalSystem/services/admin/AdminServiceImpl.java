package com.abhishek.VehicalRentalSystem.services.admin;

import com.abhishek.VehicalRentalSystem.dto.UserDto;
import com.abhishek.VehicalRentalSystem.dto.requests.CreateVehicleRequest;
import com.abhishek.VehicalRentalSystem.entities.Booking;
import com.abhishek.VehicalRentalSystem.entities.User;
import com.abhishek.VehicalRentalSystem.entities.Vehicle;
import com.abhishek.VehicalRentalSystem.enums.BOOKING_STATUS;
import com.abhishek.VehicalRentalSystem.repositories.UserRepository;
import com.abhishek.VehicalRentalSystem.services.booking.BookingService;
import com.abhishek.VehicalRentalSystem.services.vehicle.VehicleService;
import com.abhishek.VehicalRentalSystem.utils.JwtUtil;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminServiceImpl implements AdminService {

    private final VehicleService vehicleService;
    private final BookingService bookingService;
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    public AdminServiceImpl(VehicleService vehicleService, BookingService bookingService, UserRepository userRepository, JwtUtil jwtUtil) {
        this.vehicleService = vehicleService;
        this.bookingService = bookingService;
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    @Override
    public UserDto getAdminProfile(String token) {
        String email = jwtUtil.extractUserName(token);
        Optional<User> user = userRepository.findFirstByEmail(email);

        UserDto userDto = new UserDto();
        userDto.setName(user.get().getFullName());
        userDto.setEmail(user.get().getEmail());
        userDto.setBookings(user.get().getBookings());

        return userDto;
    }

    @Override
    public Vehicle addVehicle(CreateVehicleRequest createVehicleRequest) {
        return vehicleService.addVehicle(createVehicleRequest);
    }

    @Override
    public Vehicle updateVehicle(Long vehicleId, CreateVehicleRequest updatedVehicle) {
        return vehicleService.updateVehicle(vehicleId, updatedVehicle);
    }

    @Override
    public void deleteVehicle(Long vehicleId) {
        vehicleService.deleteVehicle(vehicleId);
    }

    @Override
    public List<Vehicle> getAllVehicles() {
        return vehicleService.getAllAvailableVehicles();
    }

    @Override
    public Vehicle getVehicleById(Long vehicleId) {
        return vehicleService.getVehicleById(vehicleId);
    }

    @Override
    public List<Vehicle> searchVehicles(String keyword) {
        return vehicleService.searchVehicle(keyword);
    }

    @Override
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @Override
    public Booking updateBookingStatus(Long bookingId, BOOKING_STATUS status, String token) {
        // Pass the token to BookingService's updateBookingStatus method
        return bookingService.updateBookingStatus(bookingId, status, token);
    }

    @Override
    public List<Booking> getBookingsByStatus(BOOKING_STATUS status) {
        return bookingService.getBookingsByStatus(status);
    }
}
