package com.abhishek.VehicalRentalSystem.entities;

import com.abhishek.VehicalRentalSystem.enums.VEHICLE_TYPE;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "vehicles")
@Entity
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long vehicleId;

    private String name;

    private String make;

    private String model;

    @Enumerated(EnumType.STRING)
    private VEHICLE_TYPE type;

    private String fuelType;

    private int capacity;

    private String description;

    @Column(length = 1000)
    @ElementCollection
    List<String> images;

    private BigDecimal pricePerDay;

    private boolean isAvailable;

    @JsonIgnore
    @OneToMany(mappedBy = "vehicle",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Booking> bookings = new ArrayList<>();



    @Column(updatable = false)
    @CreationTimestamp
    private LocalDateTime registrationAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;




}
