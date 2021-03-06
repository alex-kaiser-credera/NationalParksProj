package com.credera.nationalparksproj.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "National_Parks", schema="public")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NationalPark {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "park", fetch = FetchType.EAGER, cascade = CascadeType.ALL, targetEntity = Employee.class)
    private Set<Employee> employees;

    @JsonIgnore
    @OneToMany(mappedBy = "id", fetch = FetchType.EAGER, cascade = CascadeType.ALL, targetEntity = Request.class)
    private Set<Request> visitorRequests;



}
