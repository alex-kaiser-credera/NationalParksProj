package com.credera.nationalparksproj.model;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "Employee", schema="public")
@Getter
@NoArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @ManyToOne(targetEntity = NationalPark.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "park")
    private NationalPark park;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "salt")
    private String salt;

}
