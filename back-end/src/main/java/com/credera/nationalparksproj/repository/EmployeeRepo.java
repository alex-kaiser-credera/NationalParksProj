package com.credera.nationalparksproj.repository;

import com.credera.nationalparksproj.model.Employee;
import com.credera.nationalparksproj.model.NationalPark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Integer> {

    @Query("SELECT e.password FROM Employee e WHERE e.username = :employee_username")
    String findPasswordForEmployee(@Param("employee_username") String username);

    @Query("SELECT e.salt FROM Employee e WHERE e.username = :employee_username")
    String findSaltForEmployee(@Param("employee_username") String username);

    @Query("SELECT e.park FROM Employee e WHERE e.username = :employee_username")
    NationalPark findParkForEmployee(@Param("employee_username") String username);

}
