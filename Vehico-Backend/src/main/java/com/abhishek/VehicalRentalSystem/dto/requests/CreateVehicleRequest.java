package com.abhishek.VehicalRentalSystem.dto.requests;

import com.abhishek.VehicalRentalSystem.enums.VEHICLE_TYPE;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class CreateVehicleRequest {

    @NotBlank(message = "Vehicle name is required")
    private String name;

    @NotBlank(message = "Vehicle make is required")
    private String make;

    @NotBlank(message = "Vehicle model is required")
    private String model;

    @NotNull(message = "Vehicle type is required")
    private VEHICLE_TYPE type;

    @NotBlank(message = "Fuel type is required")
    private String fuelType;

    @Positive(message = "Capacity must be a positive number")
    private int capacity;

    private String description;

    @Size(max = 5, message = "You can upload a maximum of 5 images")
    private List<@NotBlank(message = "Image URL cannot be blank") String> images;

    @NotNull(message = "Price per day is required")
    @DecimalMin(value = "0.0", inclusive = false, message = "Price per day must be greater than 0")
    private BigDecimal pricePerDay;

    private boolean isAvailable;
}


