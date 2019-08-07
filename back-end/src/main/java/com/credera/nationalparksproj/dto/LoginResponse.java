package com.credera.nationalparksproj.dto;

public class LoginResponse {

    private Boolean successful;

    private Integer parkId;

    private String token;

    public LoginResponse(Boolean successful, Integer parkId, String token) {
        this.successful = successful;
        this.parkId = parkId;
        this.token = token;
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

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
