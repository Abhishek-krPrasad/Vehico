package com.abhishek.VehicalRentalSystem.controllers;

import com.abhishek.VehicalRentalSystem.dto.UserDto;
import com.abhishek.VehicalRentalSystem.dto.requests.CreateVehicleRequest;
import com.abhishek.VehicalRentalSystem.entities.Booking;
import com.abhishek.VehicalRentalSystem.entities.Vehicle;
import com.abhishek.VehicalRentalSystem.enums.BOOKING_STATUS;
import com.abhishek.VehicalRentalSystem.services.admin.AdminService;
import com.abhishek.VehicalRentalSystem.utils.JwtUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final AdminService adminService;
    private final JwtUtil jwtUtil; // Inject JwtUtil

    public AdminController(AdminService adminService, JwtUtil jwtUtil) {
        this.adminService = adminService;
        this.jwtUtil = jwtUtil;
    }

    //Get Admin Profile
    @GetMapping("/profile/data")
    public ResponseEntity<UserDto> getUserProfile(@RequestHeader("Authorization") String token){

        UserDto userDto =  adminService.getAdminProfile(token);

        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }

    // Manage Vehicles
    @PostMapping("/vehicles")
    public ResponseEntity<Vehicle> addVehicle(@RequestBody CreateVehicleRequest createVehicleRequest,
                                              @RequestHeader("Authorization") String token) {
        // Admin authentication and role check would be done inside adminService
        Vehicle vehicle = adminService.addVehicle(createVehicleRequest);
        return new ResponseEntity<>(vehicle, HttpStatus.CREATED);
    }

    @PutMapping("/vehicles/{vehicleId}")
    public ResponseEntity<Vehicle> updateVehicle(@PathVariable Long vehicleId,
                                                 @RequestBody CreateVehicleRequest updatedVehicle,
                                                 @RequestHeader("Authorization") String token) {
        // Admin authentication and role check would be done inside adminService
        Vehicle vehicle = adminService.updateVehicle(vehicleId, updatedVehicle);
        return new ResponseEntity<>(vehicle, HttpStatus.OK);
    }

    @DeleteMapping("/vehicles/{vehicleId}")
    public ResponseEntity<String> deleteVehicle(@PathVariable Long vehicleId,
                                                @RequestHeader("Authorization") String token) {
        // Admin authentication and role check would be done inside adminService
        adminService.deleteVehicle(vehicleId);
        return new ResponseEntity<>("Vehicle deleted successfully", HttpStatus.NO_CONTENT);
    }

    @GetMapping("/vehicles")
    public ResponseEntity<List<Vehicle>> getAllVehicles(@RequestHeader("Authorization") String token) {
        // Admin authentication and role check would be done inside adminService
        List<Vehicle> vehicles = adminService.getAllVehicles();
        return new ResponseEntity<>(vehicles, HttpStatus.OK);
    }

    @GetMapping("/vehicles/{vehicleId}")
    public ResponseEntity<Vehicle> getVehicleById(@PathVariable Long vehicleId,
                                                  @RequestHeader("Authorization") String token) {
        // Admin authentication and role check would be done inside adminService
        Vehicle vehicle = adminService.getVehicleById(vehicleId);
        return new ResponseEntity<>(vehicle, HttpStatus.OK);
    }

    @GetMapping("/vehicles/search")
    public ResponseEntity<List<Vehicle>> searchVehicles(@RequestParam String keyword,
                                                        @RequestHeader("Authorization") String token) {
        // Admin authentication and role check would be done inside adminService
        List<Vehicle> vehicles = adminService.searchVehicles(keyword);
        return new ResponseEntity<>(vehicles, HttpStatus.OK);
    }

    // Manage Bookings
    @GetMapping("/bookings")
    public ResponseEntity<List<Booking>> getAllBookings(@RequestHeader("Authorization") String token) {
        // Admin authentication and role check would be done inside adminService
        List<Booking> bookings = adminService.getAllBookings();
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @PutMapping("/bookings/{bookingId}")
    public ResponseEntity<Booking> updateBookingStatus(@PathVariable Long bookingId,
                                                       @RequestParam BOOKING_STATUS status,
                                                       @RequestHeader("Authorization") String token) {
        // Admin authentication and role check would be done inside adminService
        Booking booking = adminService.updateBookingStatus(bookingId, status, token);
        return new ResponseEntity<>(booking, HttpStatus.OK);
    }

    @GetMapping("/bookings/status")
    public ResponseEntity<List<Booking>> getBookingsByStatus(@RequestParam BOOKING_STATUS status,
                                                             @RequestHeader("Authorization") String token) {
        // Admin authentication and role check would be done inside adminService
        List<Booking> bookings = adminService.getBookingsByStatus(status);
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }
}
