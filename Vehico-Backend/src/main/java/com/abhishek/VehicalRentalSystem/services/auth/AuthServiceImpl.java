package com.abhishek.VehicalRentalSystem.services.auth;


import com.abhishek.VehicalRentalSystem.dto.requests.CreateUserRequest;
import com.abhishek.VehicalRentalSystem.dto.requests.SignupRequest;
import com.abhishek.VehicalRentalSystem.entities.User;
import com.abhishek.VehicalRentalSystem.enums.USER_TYPE;
import com.abhishek.VehicalRentalSystem.repositories.UserRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;

    public AuthServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostConstruct
    public void createAdminAccount() {
        User adminAccount = userRepository.findByRole(USER_TYPE.ADMIN);

        if (adminAccount == null) {
            User newAdminAccount = new User();
            newAdminAccount.setFullName("Admin");
            newAdminAccount.setEmail("admin@test.com");
            newAdminAccount.setPassword(new BCryptPasswordEncoder().encode("admin"));
            newAdminAccount.setRole(USER_TYPE.ADMIN);
            userRepository.save(newAdminAccount);
            System.out.println("Admin account created");
        }
    }

    @Override
    public CreateUserRequest createCustomer(SignupRequest signupRequest) {
        User user = new User();
        user.setFullName(signupRequest.getFullName());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(new BCryptPasswordEncoder().encode(signupRequest.getPassword()));
        user.setRole(USER_TYPE.CUSTOMER);

        User createdUser = userRepository.save(user);

        CreateUserRequest createUserRequest = new CreateUserRequest();
        createUserRequest.setId(createdUser.getUserId());

        return createUserRequest;
    }

    @Override
    public boolean hasCustomerWithEmail(String email) {
        return userRepository.findFirstByEmail(email).isPresent();
    }
}
