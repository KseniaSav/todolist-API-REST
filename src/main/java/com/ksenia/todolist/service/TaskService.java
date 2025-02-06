package com.ksenia.todolist.service;

import com.ksenia.todolist.model.Task;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class TaskService {

    private Map<Long, Task> tasks = new HashMap<>();
    private Long nextId = 1L;

    public TaskService(){

        addTask(new Task("Laver le sol"));
        addTask(new Task("Aller au cinéma"));

    }

    public Task addTask(Task task) {
        task.setId(nextId++);
        tasks.put(task.getId(), task);
        return task;
    }

    public List<Task> getAllTasks(){
        return new ArrayList<>(tasks.values());
    }

    public boolean deleteTask(Long id) {
        return tasks.remove(id) != null;
    }

    public boolean updateTask(Long id, Task updatedTask) {
        Task task = tasks.get(id);
        if(task != null) {
            task.setName(updatedTask.getName());
            task.setCompleted(updatedTask.isCompleted());
            return true;
        }
        return false;
    }

}
