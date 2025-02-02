package com.abhishek.VehicalRentalSystem.dto.requests;


import jakarta.validation.constraints.Size;
import lombok.Data;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Email;


@Data
public class SignupRequest {

    @NotBlank(message = "Email is required.")
    @Email(message = "Please provide a valid email address.")
    private String email;

    @NotBlank(message = "Full name is required.")
    @Size(min = 3, max = 50, message = "Full name must be between 3 and 50 characters.")
    private String fullName;

    @NotBlank(message = "Password is required.")
    @Size(min = 6, max = 20, message = "Password must be between 6 and 20 characters.")
    private String password;
}
