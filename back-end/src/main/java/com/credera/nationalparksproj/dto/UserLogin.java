package com.credera.nationalparksproj.dto;

public class UserLogin {
    private String un;

    private String pw;

    public String getUn() {
        return un;
    }

    public void setUn(String un) {
        this.un = un;
    }

    public String getPw() {
        return pw;
    }

    public void setPw(String pw) {
        this.pw = pw;
    }

    public UserLogin(String un, String pw) {
        this.un = un;
        this.pw = pw;
    }
}
