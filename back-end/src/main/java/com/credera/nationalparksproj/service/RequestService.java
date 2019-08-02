package com.credera.nationalparksproj.service;

import com.credera.nationalparksproj.dto.UnconnectedRequest;
import com.credera.nationalparksproj.mail.Mail;
import com.credera.nationalparksproj.model.NationalPark;
import com.credera.nationalparksproj.model.Request;
import com.credera.nationalparksproj.repository.NationalParkRepo;
import com.credera.nationalparksproj.repository.RequestRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class RequestService {

    @Autowired
    RequestRepo requestRepo;

    @Autowired
    NationalParkRepo nationalParkRepo;

    public Request saveRequest(UnconnectedRequest unconnectedRequest) {
        NationalPark nationalPark = nationalParkRepo.getParkByID(unconnectedRequest.getParkLocation());
        Request request = new Request();

        List<Request> r = requestRepo.findAll();

//        System.out.println(r.size());
//
//        request.setId(r.size() + 1);
//        System.out.println(request.getId());
        request.setStatus(unconnectedRequest.getStatus());
        request.setDateCompleted(unconnectedRequest.getDateCompleted());
        request.setDateCreated(unconnectedRequest.getDateCreated());
        request.setEmail(unconnectedRequest.getEmail());
        request.setRequestType(unconnectedRequest.getRequestType());
        request.setProblemDescription(unconnectedRequest.getProblemDescription());
        request.setParkLocation(nationalPark);

        Mail m = new Mail();

        m.sendConfirmation(unconnectedRequest.getEmail());


        return requestRepo.save(request);
    }

    public String saveStatusToRequest(Request request, String status){

        if (status.equals("Completed")) {
            Mail m = new Mail();
            m.sendComplete(request.getEmail());

        }

        Request temp = request;
        temp.setStatus(status);
        return requestRepo.save(temp).getStatus();

    }

    public Request getRequestByID(Integer id) {return requestRepo.getSubmittedRequestFromID(id); }

    public List<Request> getAllRequest() {return requestRepo.findAll(); }

    public List<Request> getInProgress() {return requestRepo.getInProgress(); }

    public List<Request> getCompleted() {return requestRepo.getCompleted(); }

}
