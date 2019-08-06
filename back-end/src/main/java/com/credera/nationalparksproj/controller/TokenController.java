package com.credera.nationalparksproj.controller;

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
    public String generate(@RequestBody final JwtUser jwtUser) {

        return jwtGenerator.generate(jwtUser);

    }


//        @Autowired
//        private EmployeeService employeeService;
//
//        @PostMapping("/token")
//        public String getToken(@RequestParam("username") final String username, @RequestParam("password") final String password){
//            String token= employeeService.login(username,password);
//            if(StringUtils.isEmpty(token)){
//                return "no token found";
//            }
//            return token;
//        }


}
