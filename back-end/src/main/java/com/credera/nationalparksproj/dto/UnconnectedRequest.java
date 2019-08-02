package com.credera.nationalparksproj.dto;


public class UnconnectedRequest {

    private String status;

    private String dateCreated;

    private String dateCompleted;

    private Integer parkLocation;

    private String requestType;

    private String problemDescription;

    private String email;

    public UnconnectedRequest(String status, String dateCreated, String dateCompleted, Integer parkLocation, String requestType, String problemDescription, String email) {
        this.status = status;
        this.dateCreated = dateCreated;
        this.dateCompleted = dateCompleted;
        this.parkLocation = parkLocation;
        this.requestType = requestType;
        this.problemDescription = problemDescription;
        this.email = email;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getDateCompleted() {
        return dateCompleted;
    }

    public void setDateCompleted(String dateCompleted) {
        this.dateCompleted = dateCompleted;
    }

    public Integer getParkLocation() {
        return parkLocation;
    }

    public void setParkLocation(Integer parkLocation) {
        this.parkLocation = parkLocation;
    }

    public String getRequestType() {
        return requestType;
    }

    public void setRequestType(String requestType) {
        this.requestType = requestType;
    }

    public String getProblemDescription() {
        return problemDescription;
    }

    public void setProblemDescription(String problemDescription) {
        this.problemDescription = problemDescription;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
