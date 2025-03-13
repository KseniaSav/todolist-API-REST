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
        <div className="container mt-4">
                    <h2 className="text-center mb-4">📋 Liste des Tâches</h2>
                    <ul className="list-group">
                        {tasks.map(task => (
                            <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <span className={task.completed ? "text-decoration-line-through" : ""}>
                                    {task.name}
                                </span>
                                <div>
                                    <button className="btn btn-success btn-sm me-2" onClick={() => handleToggleComplete(task.id, task.completed)}>
                                        {task.completed ? "Annuler" : "Terminer"}
                                    </button>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(task.id)}>🗑️</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
    );
};

export default TaskList;
