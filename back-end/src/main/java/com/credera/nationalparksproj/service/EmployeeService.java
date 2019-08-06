package com.credera.nationalparksproj.service;

import com.credera.nationalparksproj.dto.LoginResponse;
import com.credera.nationalparksproj.repository.EmployeeRepo;
import org.apache.catalina.User;
import com.credera.nationalparksproj.dto.UserLogin;
import com.credera.nationalparksproj.security.JwtGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.util.Base64;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepo employeeRepo;


    public LoginResponse isPasswordCorrect(UserLogin userLogin, JwtGenerator jwtGenerator) throws NoSuchAlgorithmException, InvalidKeySpecException{

        if(employeeRepo.findPasswordForEmployee(userLogin.getUn()).equals(getSalts(userLogin.getPw(), userLogin.getUn()))){
            LoginResponse loginResponse = new LoginResponse(true, employeeRepo.findParkForEmployee(userLogin.getUn()).getId(), jwtGenerator.generate(userLogin));
            return loginResponse;

        }
        else{
            LoginResponse loginResponse = new LoginResponse(false, employeeRepo.findParkForEmployee(userLogin.getUn()).getId(), null);
            return loginResponse;
        }
    }

    public String getSalts(String password, String username)throws NoSuchAlgorithmException, InvalidKeySpecException {
//        SecureRandom random = new SecureRandom();
//        byte[] salt = new byte[16];
//        random.nextBytes(salt);
//        System.out.println(Base64.getEncoder().encodeToString(salt));
//        KeySpec spec = new PBEKeySpec(password.toCharArray(), salt, 65536, 512);
        KeySpec spec = new PBEKeySpec(password.toCharArray(), Base64.getDecoder().decode(employeeRepo.findSaltForEmployee(username)), 65536, 512);
        SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");
        byte[] hash = factory.generateSecret(spec).getEncoded();
        return Base64.getEncoder().encodeToString(hash);
    }
}
