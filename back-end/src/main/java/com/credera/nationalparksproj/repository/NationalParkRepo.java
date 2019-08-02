package com.credera.nationalparksproj.repository;


import com.credera.nationalparksproj.model.NationalPark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface NationalParkRepo extends JpaRepository<NationalPark, Integer> {

    @Query("SELECT np.name FROM NationalPark np WHERE np.id = :park_id")
    String getParkNameByID(@Param("park_id") Integer id);

    @Query("SELECT np FROM NationalPark np WHERE np.id = :park_id")
    NationalPark getParkByID(@Param("park_id") Integer id);

}
