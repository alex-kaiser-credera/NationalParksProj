package com.credera.nationalparksproj.service;

import com.credera.nationalparksproj.repository.SubmittedRequestRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubmittedRequestService {

    @Autowired
    SubmittedRequestRepo submittedRequestRepo;

}
