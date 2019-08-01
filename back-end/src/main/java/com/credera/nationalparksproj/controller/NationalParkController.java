package com.credera.nationalparksproj.controller;

import com.credera.nationalparksproj.service.NationalParkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NationalParkController {

    @Autowired
    NationalParkService nationalParkService;

    @GetMapping("/getPark/")
    public ResponseEntity getParkFromID(@RequestParam(name = "id") Integer id){
        return new ResponseEntity(nationalParkService.getParkNameByID(id), HttpStatus.OK);
    }
}
