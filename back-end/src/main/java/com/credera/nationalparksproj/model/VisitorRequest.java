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
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "request_id")
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "parkLocation")
    private Long parkId;

    @Column(name = "requestType")
    private String requestType;

    @Column(name = "problemDescription")
    private String problemDesc;

    @Column(name = "email")
    private String email;

    @Override
    public String toString() {
        return "VisitorRequest{" +
                "id=" + id +
                ", parkId=" + parkId +
                ", requestType='" + requestType + '\'' +
                ", problemDesc='" + problemDesc + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
