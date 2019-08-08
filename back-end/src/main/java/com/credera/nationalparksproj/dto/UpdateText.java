package com.credera.nationalparksproj.dto;

public class UpdateText {
    private String noteUpdate;

    public UpdateText(String noteUpdate) {
        this.noteUpdate = noteUpdate;
    }

    public UpdateText(){

    }

    public String getNoteUpdate() {
        return noteUpdate;
    }

    public void setNoteUpdate(String noteUpdate) {
        this.noteUpdate = noteUpdate;
    }
}
