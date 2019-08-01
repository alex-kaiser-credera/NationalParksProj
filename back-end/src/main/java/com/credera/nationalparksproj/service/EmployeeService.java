package com.credera.nationalparksproj.service;

import com.credera.nationalparksproj.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepo employeeRepo;


    public Boolean isPasswordCorrect(String password, String username){
        if(employeeRepo.findPasswordForEmployee(username).equals(password)){
            return true;
        }
        else{
            return false;
        }
    }
}
