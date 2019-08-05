package com.credera.nationalparksproj.service;

import com.credera.nationalparksproj.model.Employee;
import com.credera.nationalparksproj.repository.EmployeeRepo;
import com.fasterxml.jackson.databind.ser.Serializers;
import com.google.common.hash.Hashing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.util.Base64;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepo employeeRepo;


    public Boolean isPasswordCorrect(String password, String username) throws NoSuchAlgorithmException, InvalidKeySpecException{

        System.out.println(getSalts(password, username));

        if(employeeRepo.findPasswordForEmployee(username).equals(getSalts(password, username))){
            return true;
        }
        else{
            return false;
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
