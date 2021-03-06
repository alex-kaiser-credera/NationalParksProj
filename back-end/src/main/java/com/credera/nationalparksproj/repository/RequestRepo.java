package com.credera.nationalparksproj.repository;

import com.credera.nationalparksproj.model.Request;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RequestRepo extends JpaRepository<Request, Integer> {


    @Query("select sr.id from Request sr where sr.status = :filter_select")
    Integer getSubmittedIDByFilter(@Param("filter_select") String filter);

    @Query("select sr from Request sr where sr.id = :request_id")
    Request getSubmittedRequestFromID(@Param("request_id") Integer id);

    @Query("select r from Request r where r.status = \'In Progress\'")
    List<Request> getInProgress();

    @Query("select r from Request r where r.status = \'Completed\'")
    List<Request> getCompleted();




}
