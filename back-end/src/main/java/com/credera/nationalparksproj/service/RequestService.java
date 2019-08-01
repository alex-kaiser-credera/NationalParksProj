package com.credera.nationalparksproj.service;

import com.credera.nationalparksproj.model.NationalPark;
import com.credera.nationalparksproj.model.Request;
import com.credera.nationalparksproj.repository.RequestRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestService {

    @Autowired
    RequestRepo requestRepo;

    public Request saveRequest(Request request) { return requestRepo.save(request); }

    public String saveStatusToRequest(Request request, String status){

        Request temp = request;
        temp.setStatus(status);
        return requestRepo.save(temp).getStatus();

    }

    public Request getRequestByID(Long id) {return requestRepo.getSubmittedRequestFromID(id); }

    public List<Request> getAllRequest() {return requestRepo.findAll(); }

    public List<Request> getInProgress() {return requestRepo.getInProgress(); }

    public List<Request> getCompleted() {return requestRepo.getCompleted(); }

}
