package com.credera.nationalparksproj.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "Submitted_Request")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class SubmittedRequest {

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
    
    @OneToOne(fetch = FetchType.LAZY, cascade =  CascadeType.ALL, mappedBy = "id")
    private VisitorRequest visitorRequest;

    @Override
    public String toString() {
        return "SubmittedRequest{" +
                "id=" + id +
                ", status='" + status + '\'' +
                ", date_created='" + date_created + '\'' +
                ", date_completed='" + date_completed + '\'' +
                ", visitorRequest=" + visitorRequest +
                '}';
    }


}
