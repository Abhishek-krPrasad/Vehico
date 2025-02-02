package com.abhishek.VehicalRentalSystem.dto.requests;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Date;

@Data
public class BookingRequest {



    @NotNull(message = "Vehicle ID cannot be null")
    private Long vehicleId;

    @NotNull(message = "Start date cannot be null")
    @Future(message = "Start date must be a future date")
    private Date startDate;

    @NotNull(message = "End date cannot be null")
    @Future(message = "End date must be a future date")
    private Date endDate;

    @NotNull(message = "Total cost cannot be null")
    private BigDecimal totalCost;
}
