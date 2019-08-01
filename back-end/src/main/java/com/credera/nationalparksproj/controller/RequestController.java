package com.credera.nationalparksproj.controller;

import com.credera.nationalparksproj.service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RequestController {

    @Autowired
    RequestService requestService;
}
