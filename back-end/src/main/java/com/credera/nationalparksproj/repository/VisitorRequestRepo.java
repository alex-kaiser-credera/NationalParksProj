package com.credera.nationalparksproj.repository;

import com.credera.nationalparksproj.model.VisitorRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VisitorRequestRepo extends JpaRepository<VisitorRequest, Long> {

}
