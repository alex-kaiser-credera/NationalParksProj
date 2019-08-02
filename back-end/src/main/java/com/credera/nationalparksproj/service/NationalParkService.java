package com.credera.nationalparksproj.service;

import com.credera.nationalparksproj.model.NationalPark;
import com.credera.nationalparksproj.repository.NationalParkRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NationalParkService {

    @Autowired
    NationalParkRepo nationalParkRepo;


    public List<NationalPark> getAllParks() {return nationalParkRepo.findAll(); }

    public String getParkNameByID(Integer id) {return nationalParkRepo.getParkNameByID(id); }

}
