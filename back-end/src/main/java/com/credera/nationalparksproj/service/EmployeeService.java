package com.credera.nationalparksproj.service;

import com.credera.nationalparksproj.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepo employeeRepo;

}
