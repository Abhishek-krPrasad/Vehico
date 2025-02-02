package com.abhishek.VehicalRentalSystem.controllers;

import com.abhishek.VehicalRentalSystem.dto.UserDto;
import com.abhishek.VehicalRentalSystem.dto.requests.BookingRequest;
import com.abhishek.VehicalRentalSystem.entities.Booking;
import com.abhishek.VehicalRentalSystem.entities.Vehicle;
import com.abhishek.VehicalRentalSystem.services.customer.CustomerService;
import com.abhishek.VehicalRentalSystem.utils.JwtUtil;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {

    private final CustomerService customerService;
    private final JwtUtil jwtUtil; // Inject JWTUtil

    public CustomerController(CustomerService customerService, JwtUtil jwtUtil) {
        this.customerService = customerService;
        this.jwtUtil = jwtUtil;
    }

    //Get Customer Profile
    @GetMapping("/profile/data")
    public ResponseEntity<UserDto> getUserProfile(@RequestHeader("Authorization") String token){

        UserDto userDto =  customerService.getCustomerProfile(token);

        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }

    // Get all available vehicles
    @GetMapping("/vehicles")
    public ResponseEntity<List<Vehicle>> getAllAvailableVehicles(@RequestParam(value = "type", required = false) String type) {
        List<Vehicle> vehicles = customerService.getAllAvailableVehicles(type);
        return new ResponseEntity<>(vehicles, HttpStatus.OK);
    }

    // Get vehicle details by ID
    @GetMapping("/vehicles/{vehicleId}")
    public ResponseEntity<Vehicle> getVehicleById(@PathVariable Long vehicleId) {
        Vehicle vehicle = customerService.getVehicleById(vehicleId);
        return new ResponseEntity<>(vehicle, HttpStatus.OK);
    }

    // Customer creates a booking
    @PostMapping("/bookings")
    public ResponseEntity<Booking> createBooking(@RequestBody @Valid BookingRequest bookingRequest,
                                                 @RequestHeader("Authorization") String token) {
        // Pass the token to the service
        Booking booking = customerService.createBooking(bookingRequest, token);
        return new ResponseEntity<>(booking, HttpStatus.CREATED);
    }

    // Get all bookings of the customer
    @GetMapping("/bookings")
    public ResponseEntity<List<Booking>> getCustomerBookings(@RequestHeader("Authorization") String token) {
        Long customerId = Long.valueOf(jwtUtil.extractUserId(token)); // Use JWTUtil to extract user ID from token
        List<Booking> bookings = customerService.getCustomerBookings(customerId, token);
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    // Get details of a specific booking
    @GetMapping("/bookings/{bookingId}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long bookingId) {
        Booking booking = customerService.getBookingById(bookingId);
        return new ResponseEntity<>(booking, HttpStatus.OK);
    }

    // Cancel a booking
    @DeleteMapping("/bookings/{bookingId}")
    public ResponseEntity<String> cancelBooking(@PathVariable Long bookingId, @RequestHeader("Authorization") String token) {
        // Pass the token to the service for cancellation
        boolean isCancelled = customerService.cancelBooking(bookingId, token);
        if (isCancelled) {
            return new ResponseEntity<>("Booking cancelled successfully", HttpStatus.OK);
        }
        return new ResponseEntity<>("Booking not found or cannot be cancelled", HttpStatus.BAD_REQUEST);
    }

    // Search vehicles by keyword
    @GetMapping("/vehicles/search")
    public ResponseEntity<List<Vehicle>> searchVehicles(@RequestParam String keyword) {
        List<Vehicle> vehicles = customerService.searchVehicles(keyword);
        return new ResponseEntity<>(vehicles, HttpStatus.OK);
    }
}
