package com.credera.nationalparksproj.dto;

public class LoginResponse {

    private Boolean successful;

    private Integer parkId;

    public LoginResponse(Boolean successful, Integer parkId) {
        this.successful = successful;
        this.parkId = parkId;
    }

    public Boolean getSuccessful() {
        return successful;
    }

    public void setSuccessful(Boolean successful) {
        this.successful = successful;
    }

    public Integer getParkId() {
        return parkId;
    }

    public void setParkId(Integer parkId) {
        this.parkId = parkId;
    }
}
