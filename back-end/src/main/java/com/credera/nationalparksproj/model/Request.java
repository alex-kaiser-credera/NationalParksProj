package com.credera.nationalparksproj.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "Requests")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "status")
    private String status;

    @Column(name = "dateCreated")
    private String date_created;

    @Column(name = "dateCompleted")
    private String date_completed;

    @ManyToOne(targetEntity = NationalPark.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "name")
    private NationalPark nationalPark;

    @Column(name = "requestType")
    private String requestType;

    @Column(name = "problemDescription")
    private String problemDesc;

    @Column(name = "email")
    private String email;

    @Override
    public String toString() {
        return "Requests{" +
                "id=" + id +
                ", status='" + status + '\'' +
                ", date_created='" + date_created + '\'' +
                ", date_completed='" + date_completed + '\'' +
                ", nationalPark=" + nationalPark +
                ", requestType='" + requestType + '\'' +
                ", problemDesc='" + problemDesc + '\'' +
                ", email='" + email + '\'' +
                '}';
    }




}
