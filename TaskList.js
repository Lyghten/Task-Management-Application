import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const TaskList = () => {
    const { token } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const response = await axios.get('http://localhost:5000/api/tasks', { headers: { 'x-auth-token': token } });
        setTasks(response.data);
    };

    useEffect(() => {
        fetchTasks();
    }, [token]);

    return (
        <div>
            <h2>Your Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;