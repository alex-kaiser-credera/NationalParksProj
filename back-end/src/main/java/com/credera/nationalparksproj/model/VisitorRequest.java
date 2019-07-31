package com.credera.nationalparksproj.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Visitor_Request")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class VisitorRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "status")
    private String name;

}
