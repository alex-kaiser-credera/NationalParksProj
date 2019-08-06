package com.credera.nationalparksproj.security;


import com.credera.nationalparksproj.dto.UserLogin;
import com.credera.nationalparksproj.model.JwtUser;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

@Component
public class JwtGenerator {

    public String generate(UserLogin userLogin) {

        Claims claims = Jwts.claims()
                .setSubject(userLogin.getUn());
        claims.put("pw", String.valueOf(userLogin.getPw()));


        return Jwts.builder()
                .setClaims(claims)
                        .signWith(SignatureAlgorithm.HS512, "youtube")
                        .compact();



    }
}
