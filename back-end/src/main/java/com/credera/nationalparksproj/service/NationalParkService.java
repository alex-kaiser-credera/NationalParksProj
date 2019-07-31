package com.credera.nationalparksproj.service;

import com.credera.nationalparksproj.repository.NationalParkRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NationalParkService {

    @Autowired
    NationalParkRepo nationalParkRepo;


}
