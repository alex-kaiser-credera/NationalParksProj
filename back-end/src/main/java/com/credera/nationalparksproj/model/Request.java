package com.credera.nationalparksproj.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "Requests", schema="public")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "status")
    private String status;

    @Column(name = "dateCreated")
    private String dateCreated;

    @Column(name = "dateCompleted")
    private String dateCompleted;
    
    @ManyToOne(targetEntity = NationalPark.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "parkLocation")
    private NationalPark parkLocation;

    @Column(name = "requestType")
    private String requestType;

    @Column(name = "problemDescription")
    private String problemDescription;

    @Column(name = "email")
    private String email;

//    @Override
//    public String toString() {
//        return "Requests{" +
//                "id=" + id +
//                ", status='" + status + '\'' +
//                ", date_created='" + date_created + '\'' +
//                ", date_completed='" + date_completed + '\'' +
//                ", nationalPark=" + nationalPark +
//                ", requestType='" + requestType + '\'' +
//                ", problemDesc='" + problemDesc + '\'' +
//                ", email='" + email + '\'' +
//                '}';
//    }




}