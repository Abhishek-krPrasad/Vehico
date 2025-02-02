package com.abhishek.VehicalRentalSystem.dto.responses;

import com.abhishek.VehicalRentalSystem.enums.USER_TYPE;
import lombok.Data;

@Data
public class AuthenticationResponse {
    private String jwt;
    private USER_TYPE role;
    private Long userId;
}
