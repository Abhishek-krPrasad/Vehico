package com.abhishek.VehicalRentalSystem.services.auth;


import com.abhishek.VehicalRentalSystem.dto.requests.CreateUserRequest;
import com.abhishek.VehicalRentalSystem.dto.requests.SignupRequest;
public interface AuthService {
    CreateUserRequest createCustomer(SignupRequest signupRequest);

    boolean hasCustomerWithEmail(String email);
}
