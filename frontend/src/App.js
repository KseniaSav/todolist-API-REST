import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const App = () => {
    const [refresh, setRefresh] = useState(false);

    const handleTaskAdded = () => {
        setRefresh(!refresh);
    };

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow">
                <h1 className="text-center mb-4">📝 Gestion des Tâches</h1>
                    <TaskForm onTaskAdded={handleTaskAdded} />
                    <TaskList key={refresh} />
            </div>
        </div>
    );
};

export default App;

