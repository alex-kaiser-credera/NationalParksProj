package com.credera.nationalparksproj.repository;


import com.credera.nationalparksproj.model.NationalPark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NationalParkRepo extends JpaRepository<NationalPark, Long> {

}
