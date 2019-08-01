package com.credera.nationalparksproj.repository;

import com.credera.nationalparksproj.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long> {

    @Query("SELECT e.password FROM Employee e WHERE e.username = :employee_username")
    String findPasswordForEmployee(@Param("employee_username") String username);

}
