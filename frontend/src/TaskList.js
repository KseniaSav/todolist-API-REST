import React, { useEffect, useState } from "react";
import { getTasks, deleteTask, updateTask } from "./api";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    };

    const handleDelete = async (taskId) => {
        await deleteTask(taskId);
        loadTasks();
    };

    const handleToggleComplete = async (taskId, completed) => {
        await updateTask(taskId, !completed);
        loadTasks();
    };

    return (
        <div>
            <h2>Liste des Tâches</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                            {task.name}
                        </span>
                        <button onClick={() => handleToggleComplete(task.id, task.completed)}>
                            {task.completed ? "Annuler" : "Terminer"}
                        </button>
                        <button onClick={() => handleDelete(task.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
