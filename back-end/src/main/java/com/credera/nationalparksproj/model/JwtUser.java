package com.credera.nationalparksproj.model;

public class JwtUser {

    private String userName;
    private long id;


    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public long getId() {
        return id;
    }

    public JwtUser(String userName, long id) {
        this.userName = userName;
        this.id = id;
    }

    public JwtUser() {

    }
}
