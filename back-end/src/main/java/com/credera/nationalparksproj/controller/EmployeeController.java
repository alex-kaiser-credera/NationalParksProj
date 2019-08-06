package com.credera.nationalparksproj.controller;

import com.credera.nationalparksproj.dto.UserLogin;
import com.credera.nationalparksproj.model.Employee;
import com.credera.nationalparksproj.model.Request;
import com.credera.nationalparksproj.service.EmployeeService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

@RestController
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/password/")
    public ResponseEntity getPassword (@RequestBody UserLogin userLogin) throws InvalidKeySpecException, NoSuchAlgorithmException {
        return new ResponseEntity( employeeService.isPasswordCorrect(userLogin) , HttpStatus.OK);
    }




}
