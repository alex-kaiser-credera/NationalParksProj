package com.credera.nationalparksproj.service;

import com.credera.nationalparksproj.model.Employee;
import com.credera.nationalparksproj.repository.EmployeeRepo;
import com.google.common.hash.Hashing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepo employeeRepo;


    public Boolean isPasswordCorrect(String password, String username){
        String sha256hex = Hashing.sha256()
                .hashString(password, StandardCharsets.UTF_8)
                .toString();
        if(employeeRepo.findPasswordForEmployee(username).equals(sha256hex)){
            return true;
        }
        else{
            return false;
        }
    }
}
