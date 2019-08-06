package com.credera.nationalparksproj.service;

import antlr.StringUtils;
import com.credera.nationalparksproj.model.Employee;
import com.credera.nationalparksproj.repository.EmployeeRepo;
import com.google.common.hash.Hashing;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.Optional;
import java.util.UUID;

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

//    @Override
//    public String login(String username, String password) {
//        Optional employee = EmployeeRepo.login(username,password);
//        if(employee.isPresent()){
//            String token = UUID.randomUUID().toString();
//            Employee employee = employee.get();
//            employee.setToken(token);
//            EmployeeRepo.save(employee);
//            return token;
//        }
//
//        return StringUtils.EMPTY;
//    }
//
//    public Optional findByToken(String token) {
//        Optional employee = EmployeeRepo.findByToken(token);
//        if(employee.isPresent()){
//            Employee employee = employee.get();
//            User user= new User(employee.getUsername(), employee.getPassword(), true, true, true, true, AuthorityUtils.createAuthorityList("USER"));
//            return Optional.of(user);
//        }
//        return  Optional.empty();
//    }
}
