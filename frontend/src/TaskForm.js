import React, { useState } from "react";
import { addTask } from "./api";

const TaskForm = ({ onTaskAdded }) => {
    const [taskName, setTaskName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addTask(taskName);
        setTaskName("");
        onTaskAdded();
    };

    return (
        <div className="container mt-3">
                    <form onSubmit={handleSubmit} className="d-flex">
                        <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Nouvelle tâche..."
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary">Ajouter</button>
                    </form>
                </div>
    );
};

export default TaskForm;
