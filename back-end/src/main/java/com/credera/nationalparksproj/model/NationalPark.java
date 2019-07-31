package com.credera.nationalparksproj.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

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


}
