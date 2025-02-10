import axios from "axios";

const API_URL = "http://localhost:8080/api/tasks";

// Récupérer toutes les tâches
export const getTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Ajouter une tâche
export const addTask = async (taskName) => {
    const response = await axios.post(API_URL, { name: taskName, completed: false });
    return response.data;
};

// Supprimer une tâche
export const deleteTask = async (taskId) => {
    await axios.delete(`${API_URL}/${taskId}`);
};

// Mettre à jour une tâche (marquer comme complétée ou non)
export const updateTask = async (taskId, completed) => {
    await axios.put(`${API_URL}/${taskId}`, { completed });
};
