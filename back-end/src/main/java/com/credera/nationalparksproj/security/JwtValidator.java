package com.credera.nationalparksproj.security;

import com.credera.nationalparksproj.model.JwtUser;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Component;

@Component
public class JwtValidator {

    private String secret = "youtube";

    public JwtUser validate(String token) {

        JwtUser jwtUser = null;
        try {
            Claims body = Jwts.parser()
                    .setSigningKey(secret)
                    .parseClaimsJws(token)
                    .getBody();

            System.out.println(body);

            jwtUser = new JwtUser();

            jwtUser.setUserName(body.getSubject());
            jwtUser.setPassWord(((String) body.get("pw")));

        }
        catch (Exception e) {
            System.out.println();
        }

            return jwtUser;
    }
}
