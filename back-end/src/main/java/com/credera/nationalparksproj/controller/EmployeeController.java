package com.credera.nationalparksproj.controller;

import com.credera.nationalparksproj.model.Employee;
import com.credera.nationalparksproj.model.Request;
import com.credera.nationalparksproj.service.EmployeeService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @PostMapping(value = "/password")
    public ResponseEntity getPassword (@RequestBody Employee employee) {

         return new ResponseEntity(employeeService.isPasswordCorrect(employee.getPassword()), HttpStatus.OK);
    }


    }


