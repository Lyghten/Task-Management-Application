import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const TaskForm = ({ refreshTasks }) => {
    const { token } = useContext(AuthContext);
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/tasks', { title }, { headers: { 'x-auth-token': token } });
        setTitle('');
        refreshTasks();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Task Title" 
                required 
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;