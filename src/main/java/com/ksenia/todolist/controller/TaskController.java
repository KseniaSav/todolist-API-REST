package com.ksenia.todolist.controller;

import com.ksenia.todolist.model.Task;
import com.ksenia.todolist.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

    @DeleteMapping("/{id}")
    public String deleteTask(@PathVariable Long id) {
        boolean isDeleted = taskService.deleteTask(id);
        if(isDeleted)
            return "Tache supprimée avec succès.";
        else
            return "Tache introuvable.";
    }

    @PutMapping("/{id}")
    public String updateTask(@PathVariable Long id, @RequestBody Task newTask) {
        boolean isUpdated = taskService.updateTask(id, newTask);
        return isUpdated ? "Tache mise à jour avec succès." : "Tache introuvable.";
    }

}
