import React from 'react';
import { AuthProvider } from './context/AuthContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
    return (
        <AuthProvider>
            <div className="App">
                <h1>Task Management App</h1>
                <TaskForm />
                <TaskList />
            </div>
        </AuthProvider>
    );
};

export default App;