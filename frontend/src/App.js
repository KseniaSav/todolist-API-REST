import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const App = () => {
    const [refresh, setRefresh] = useState(false);

    const handleTaskAdded = () => {
        setRefresh(!refresh);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <TaskForm onTaskAdded={handleTaskAdded} />
            <TaskList key={refresh} />
        </div>
    );
};

export default App;
