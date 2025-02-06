package com.ksenia.todolist.model;

public class Task {
    private Long id;
    private String name;
    private boolean completed;


    public Task() {
        this.completed = false;
    }

    public Task(String name) {
        this.name = name;
        this.completed = false;
    }

    // Getters et setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}
