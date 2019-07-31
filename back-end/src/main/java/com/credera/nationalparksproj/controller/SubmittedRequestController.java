package com.credera.nationalparksproj.controller;

import com.credera.nationalparksproj.service.SubmittedRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SubmittedRequestController {

    @Autowired
    SubmittedRequestService submittedRequestService;
}
