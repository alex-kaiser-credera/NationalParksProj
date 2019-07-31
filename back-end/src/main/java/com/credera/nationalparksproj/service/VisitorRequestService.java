package com.credera.nationalparksproj.service;

import com.credera.nationalparksproj.repository.VisitorRequestRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VisitorRequestService {

    @Autowired
    VisitorRequestRepo visitorRequestRepo;

}
