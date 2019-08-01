package com.credera.nationalparksproj.controller;

import com.credera.nationalparksproj.model.Request;
//import com.credera.nationalparksproj.service.SubmittedRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.credera.nationalparksproj.service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

@RestController
@RequestMapping("/status")
public class RequestController {

    @Autowired
    RequestService requestService;



    @GetMapping(value = "/filter")
    public ResponseEntity getAll (@RequestParam (name = "filter") String filter) {
        if (filter.equals("all")) {
            return new ResponseEntity(requestService.getAllRequest(), HttpStatus.OK);
        } else if (filter.equals("inprogress")) {
            return new ResponseEntity(requestService.getInProgress(), HttpStatus.OK);
        } else {
            return new ResponseEntity(requestService.getCompleted(), HttpStatus.OK);
        }

    }

    //    @GetMapping(value = "/dateCreated")
//    public ResponseEntity getDateLow (@RequestMapping(name = "")) {
//        return new ResponseEntity(  , HttpStatus.OK);
//    }
//
//    @GetMapping(value = "/dateCompleted")
//    public ResponseEntity getDateHigh (@RequestMapping(name = "")) {
//        return new ResponseEntity(  , HttpStatus.OK);
//    }

//
//    @GetMapping(value = "/inprogress")
//    public ResponseEntity getInProgress (@RequestParam (value = "filter") String filter) {
//        return new ResponseEntity(  , HttpStatus.OK);
//    }
//
//    @GetMapping(value = "/completed")
//    public ResponseEntity getCompleted (@RequestParam (name = "filter") String filter) {
//        return new ResponseEntity(  , HttpStatus.OK);
//    }
//
        @PutMapping("/{id}")
        public String updateStatus (
                @PathVariable Long id,
                @RequestParam(value = "status") String status){
            Request _request = requestService.getRequestByID(id);
            return requestService.saveStatusToRequest(_request, status);

        }

    }