package com.credera.nationalparksproj.controller;

import com.credera.nationalparksproj.dto.TextToVisitor;
import com.credera.nationalparksproj.dto.UnconnectedRequest;
import com.credera.nationalparksproj.dto.UpdateText;
import com.credera.nationalparksproj.model.Request;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.credera.nationalparksproj.service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.w3c.dom.Text;

@RestController
@RequestMapping("/status")
public class RequestController {
    

    @Autowired
    RequestService requestService;


    @GetMapping(value = "/filter")
    public ResponseEntity getAll (@RequestParam (name = "filter") String filter) {
        if (filter.equals("All")) {
            return new ResponseEntity(requestService.getAllRequest(), HttpStatus.OK);
        } else if (filter.equals("In Progress")) {
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

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/updateStatus/{id}")
    public String updateStatus (
            @PathVariable Integer id,
            @RequestParam(value = "status") String status){
        Request _request = requestService.getRequestByID(id);
        return requestService.saveStatusToRequest(_request, status);

    }

    @GetMapping("/{id}")
    public Request getStatus (@PathVariable Integer id){
        return requestService.getRequestByID(id);

    }
    @CrossOrigin(origins = "http://localhost:3000")

    @PostMapping(value = "/visitor")
    public ResponseEntity saveRequest (@RequestBody UnconnectedRequest unconnectedRequest) {
        return new ResponseEntity(requestService.saveRequest(unconnectedRequest), HttpStatus.OK);
    }

    @GetMapping("/view/{id}")
    public ResponseEntity getRequestsPerPark (@PathVariable Integer id, @RequestParam(value="status") String status){
        return new ResponseEntity(requestService.getRequestByPark(id, status), HttpStatus.OK);
    }

    @PostMapping("/send")
    public ResponseEntity sendMessageToVisitor (@RequestBody TextToVisitor textToVisitor){
        return new ResponseEntity(requestService.sendResponseToVisitor(textToVisitor), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/updateNotes/{id}")
    public ResponseEntity updateNotes (@PathVariable Integer id, @RequestBody UpdateText updateText){
        Request _request = requestService.getRequestByID(id);
        return new ResponseEntity(requestService.saveNotesToRequest(_request, updateText), HttpStatus.OK);
    }
}