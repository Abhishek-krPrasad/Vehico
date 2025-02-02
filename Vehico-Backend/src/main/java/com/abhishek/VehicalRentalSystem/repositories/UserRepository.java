package com.abhishek.VehicalRentalSystem.repositories;

import com.abhishek.VehicalRentalSystem.entities.User;
import com.abhishek.VehicalRentalSystem.enums.USER_TYPE;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    User findByRole(USER_TYPE role);

    Optional<User> findFirstByEmail(String email);
}
