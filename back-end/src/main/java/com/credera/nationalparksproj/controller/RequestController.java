package com.credera.nationalparksproj.controller;

import com.credera.nationalparksproj.model.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.credera.nationalparksproj.service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/status")
public class RequestController {

    @Autowired
    RequestService requestService;

//    @GetMapping(value = "/dateCreated")
//    public ResponseEntity getDateLow (@RequestMapping(name = "")) {
//        return new ResponseEntity(  , HttpStatus.OK);
//    }
//
//    @GetMapping(value = "/dateCompleted")
//    public ResponseEntity getDateHigh (@RequestMapping(name = "")) {
//        return new ResponseEntity(  , HttpStatus.OK);
//    }

//    @GetMapping(value = "/status")
//    public ResponseEntity getStatus (@RequestMapping(name = "")) {
//        return new ResponseEntity(  , HttpStatus.OK);
//    }
//
//    @GetMapping(value = "/all")
//    public ResponseEntity getAll (@RequestMapping (name = "")) {
//        return new ResponseEntity(  , HttpStatus.OK);

    @PostMapping(value = "/visitor")
    public ResponseEntity saveRequest (@RequestBody Request request) {
        return new ResponseEntity(requestService.saveVisitorRequest(request), HttpStatus.OK);
    }
}
