package com.abhishek.VehicalRentalSystem.repositories;

import com.abhishek.VehicalRentalSystem.entities.Booking;
import com.abhishek.VehicalRentalSystem.enums.BOOKING_STATUS;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking,Long> {

    public List<Booking> findByVehicle_VehicleId(Long vehicleId);

    public List<Booking> findByUser_UserId(Long userId);

    List<Booking> findByStatus(BOOKING_STATUS status);
}
