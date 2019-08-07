package com.credera.nationalparksproj.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/username")
public class UsernameController {

    @GetMapping
    public String Username() {
        return "This works!!!";
    }

}
