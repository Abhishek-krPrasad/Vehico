package com.abhishek.VehicalRentalSystem.dto;

import com.abhishek.VehicalRentalSystem.entities.Booking;
import lombok.Data;

import java.util.List;

@Data
public class UserDto {

    private String name;

    private String email;

    List<Booking> bookings;
}
