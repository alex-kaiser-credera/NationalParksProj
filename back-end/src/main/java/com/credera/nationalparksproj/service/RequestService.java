package com.credera.nationalparksproj.service;

import com.credera.nationalparksproj.dto.TextToVisitor;
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
import java.util.stream.Collectors;

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
        request.setStatus(unconnectedRequest.getStatus());
        request.setDateCompleted(unconnectedRequest.getDateCompleted());
        request.setDateCreated(unconnectedRequest.getDateCreated());
        request.setEmail(unconnectedRequest.getEmail());
        request.setRequestType(unconnectedRequest.getRequestType());
        request.setProblemDescription(unconnectedRequest.getProblemDescription());
        request.setParkLocation(nationalPark);

        Set<Request> temp = nationalPark.getVisitorRequests();
        temp.add(request);
        nationalPark.setVisitorRequests(temp);

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

    public List<Request> getRequestByPark(Integer parkId, String progress) {
        NationalPark nationalPark = nationalParkRepo.getParkByID(parkId);
        if(progress.equals("In Progress")){
            return requestRepo.getInProgress().stream().filter(r -> r.getParkLocation() == nationalPark).collect(Collectors.toList());
        }
        else if(progress.equals("Completed")){
            return requestRepo.getCompleted().stream().filter(r -> r.getParkLocation() == nationalPark).collect(Collectors.toList());
        }
        else{
            return requestRepo.findAll().stream().filter(r -> r.getParkLocation() == nationalPark).collect(Collectors.toList());
        }
    }

    public String sendResponseToVisitor(TextToVisitor textToVisitor){
        Mail m = new Mail();
        m.sendEmailToVisitor(textToVisitor);
        return "Thank you!";
    }


}
