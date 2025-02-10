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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nouvelle tâche"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default TaskForm;
