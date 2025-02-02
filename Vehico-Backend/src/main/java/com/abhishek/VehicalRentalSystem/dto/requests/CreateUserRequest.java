package com.abhishek.VehicalRentalSystem.dto.requests;

import lombok.Data;

@Data
public class CreateUserRequest {
    private Long id;
    private String fullName;
    private String email;
    private String role;

}
