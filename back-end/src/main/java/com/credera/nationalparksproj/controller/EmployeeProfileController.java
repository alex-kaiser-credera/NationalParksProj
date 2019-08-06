//package com.credera.nationalparksproj.controller;


import com.credera.nationalparksproj.model.Employee;
import com.credera.nationalparksproj.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//@RestController
//public class EmployeeProfileController {
//
//    @Autowired
//    private EmployeeService employeeService;
//
//    @GetMapping(value = "/api/users/user/{id}",produces = "application/json")
//    public Employee getEmployeeProfileDetail(@PathVariable  Long id){
//        return employeeService.findById(id);
//    }
//}
