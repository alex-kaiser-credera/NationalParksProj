package com.credera.nationalparksproj.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "National_Park")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NationalPark {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "park_name")
    private String name;

    @OneToMany(mappedBy = "park", fetch = FetchType.EAGER, cascade = CascadeType.ALL, targetEntity = Employee.class)
    private List<Employee> employees;

    @OneToMany(mappedBy = "parkLocation", fetch = FetchType.EAGER, cascade = CascadeType.ALL, targetEntity = VisitorRequest.class)
    private List<VisitorRequest> visitorRequests;

    @Override
    public String toString() {
        return "NationalPark{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", employees=" + employees +
                ", visitorRequests=" + visitorRequests +
                '}';
    }


}
