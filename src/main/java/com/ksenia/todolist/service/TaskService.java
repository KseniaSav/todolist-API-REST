package com.ksenia.todolist.service;

import com.ksenia.todolist.model.Task;
import com.ksenia.todolist.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

   private final TaskRepository taskRepository;

   public TaskService(TaskRepository taskRepository) {
       this.taskRepository = taskRepository;
   }

    public List<Task> getAllTasks(){
        return taskRepository.findAll();
    }

    public Task createTask(Task task) {
       return taskRepository.save(task); //sauvegarde en base
    }

    public boolean deleteTask(Long id) {
        if(taskRepository.existsById(id)) {
            taskRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public boolean updateTask(Long id, Task updatedTask) {
        return taskRepository.findById(id)
                .map(existingTask -> {
                    existingTask.setName(updatedTask.getName());
                    existingTask.setCompleted(updatedTask.isCompleted());
                    taskRepository.save(existingTask); // Mise à jour
                    return true;
                }).orElse(false);
    }

}
