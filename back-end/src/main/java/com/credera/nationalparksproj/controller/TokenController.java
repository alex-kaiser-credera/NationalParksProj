package com.credera.nationalparksproj.controller;

import com.credera.nationalparksproj.dto.UserLogin;
import com.credera.nationalparksproj.model.JwtUser;
import com.credera.nationalparksproj.security.JwtGenerator;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/token")
public class TokenController {


    private JwtGenerator jwtGenerator;

    public TokenController(JwtGenerator jwtGenerator) {
        this.jwtGenerator = jwtGenerator;
    }

    @PostMapping
    public String generate(@RequestBody final UserLogin userLogin) {

        return jwtGenerator.generate(userLogin);

    }


}
