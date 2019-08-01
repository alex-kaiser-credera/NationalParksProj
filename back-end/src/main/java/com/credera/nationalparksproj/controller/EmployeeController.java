package com.credera.nationalparksproj.controller;

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

    @GetMapping(value = "/password")
    public ResponseEntity getPassword (@RequestMapping(name = "")) {
        return new ResponseEntity(    , HttpStatus.OK);
    }


    }




    @PostMapping(value = "/")
    public ResponseEntity


}
