package com.abhishek.VehicalRentalSystem.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtUtil {

    @Value("${JWT_KEY}")
    private String KEY;

    // Extract the username (email) from the token
    public String extractUserName(String token) {
        try {
            // Remove "Bearer " prefix if present and trim spaces
            if (token.startsWith("Bearer ")) {
                token = token.substring(7).trim();
            }

            return extractClaim(token.trim(), Claims::getSubject);
        } catch (Exception e) {
            System.err.println("Error extracting username: " + e.getMessage());
            throw new RuntimeException("Invalid token", e);
        }
    }


    // Generate a JWT token with user details and userId
    public String generateToken(UserDetails userDetails, Long userId) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", userId.toString());  // Add userId to claims

        return generateToken(claims, userDetails);
    }

    // Validate the token against the user details
    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String userName = extractUserName(token);
        return (userName.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    // Helper function to extract claims from the token
    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    // Generate JWT token with additional claims and user details
    private String generateToken(Map<String, Object> claims, UserDetails userDetails) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24 * 7)) // 7 days expiration
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    // Check if the token is expired
    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    // Extract expiration date from the token
    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    // Extract all claims from the token
    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token.trim())
                .getBody();
    }

    // Extract userId from the token
    public String extractUserId(String token) {
        // Remove the "Bearer " prefix if present
        if (token.startsWith("Bearer ")) {
            token = token.substring(7);  // Remove "Bearer " (7 characters)
        }

        // Now decode the token and extract the userId
        Claims claims = extractAllClaims(token);
        return claims.get("userId", String.class); // Extract userId as String
    }

    // Get the signing key for the JWT
    private Key getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
