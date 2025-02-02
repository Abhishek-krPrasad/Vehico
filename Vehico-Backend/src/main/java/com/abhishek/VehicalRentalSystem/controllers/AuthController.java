package com.abhishek.VehicalRentalSystem.controllers;

import com.abhishek.VehicalRentalSystem.dto.requests.AuthenticationRequest;
import com.abhishek.VehicalRentalSystem.dto.responses.AuthenticationResponse;
import com.abhishek.VehicalRentalSystem.dto.requests.CreateUserRequest;
import com.abhishek.VehicalRentalSystem.dto.requests.SignupRequest;
import com.abhishek.VehicalRentalSystem.entities.User;
import com.abhishek.VehicalRentalSystem.repositories.UserRepository;
import com.abhishek.VehicalRentalSystem.services.auth.AuthService;
import com.abhishek.VehicalRentalSystem.services.jwt.UserService;
import com.abhishek.VehicalRentalSystem.utils.JwtUtil;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;
    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final JwtUtil jwtUtil;
    private final UserRepository userRepository;

    public AuthController(AuthService authService, AuthenticationManager authenticationManager, UserService userService, JwtUtil jwtUtil, UserRepository userRepository) {
        this.authService = authService;
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.jwtUtil = jwtUtil;
        this.userRepository = userRepository;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signupCustomer(@RequestBody @Valid SignupRequest signupRequest) {
        if (authService.hasCustomerWithEmail(signupRequest.getEmail()))
            return new ResponseEntity<>("Customer already exists", HttpStatus.NOT_ACCEPTABLE);

        CreateUserRequest createdCustomerDto = authService.createCustomer(signupRequest);

        if (createdCustomerDto == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        return new ResponseEntity<>(createdCustomerDto, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public AuthenticationResponse login(@RequestBody @Valid AuthenticationRequest authenticationRequest)
            throws BadCredentialsException, DisabledException, UsernameNotFoundException {

        try {
            // Authenticate the user
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword()));
        } catch (BadCredentialsException badCredentialsException) {
            throw new BadCredentialsException("Incorrect Email Or Password.");
        }

        // Load user details from the service
        final UserDetails userDetails = userService.userDetailsService().loadUserByUsername(authenticationRequest.getEmail());

        // Find the user from the database using the email
        Optional<User> optionalUser = userRepository.findFirstByEmail(userDetails.getUsername());

        // Generate JWT token with the user ID
        String jwt = null;
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            // Pass the userId to the generateToken method
            jwt = jwtUtil.generateToken(userDetails, user.getUserId());  // Pass the userId here
            authenticationResponse.setJwt(jwt);
            authenticationResponse.setUserId(user.getUserId());
            authenticationResponse.setRole(user.getRole());
        }
        return authenticationResponse;
    }

}
