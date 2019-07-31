package com.credera.nationalparksproj.repository;

import com.credera.nationalparksproj.model.SubmittedRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubmittedRequestRepo extends JpaRepository<SubmittedRequest, Long> {

}
