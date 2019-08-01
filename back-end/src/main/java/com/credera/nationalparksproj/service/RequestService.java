package com.credera.nationalparksproj.service;

import com.credera.nationalparksproj.model.Request;
import com.credera.nationalparksproj.repository.RequestRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RequestService {

    @Autowired
    RequestRepo requestRepo;

    public Request saveVisitorRequest(Request request) { return requestRepo.save(request); }

    public Request saveStatusToSubmittedRequest(Request request, String status){

        Request temp = request;
        temp.setStatus(status);
        //temp.setDate_created();
        return requestRepo.save(temp);

    }
}
