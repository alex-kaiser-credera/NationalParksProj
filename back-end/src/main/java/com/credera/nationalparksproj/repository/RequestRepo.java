package com.credera.nationalparksproj.repository;

import com.credera.nationalparksproj.model.Request;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RequestRepo extends JpaRepository<Request, Long> {


    @Query("select sr.id from Request sr where sr.status = :filter_select")
    Long getSubmittedIDByFilter(@Param("filter_select") String filter);

    @Query("SELECT sr from Request sr where sr.id = :request_id")
    Request getSubmittedRequestFromID(@Param("request_id") Long id);


}
