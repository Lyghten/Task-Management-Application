import React, { createContext, useReducer } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, token: action.payload };
        case 'LOGOUT':
            return { ...state, token: null };
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { token: null });

    const login = async (username, password) => {
        const response = await axios.post('http://localhost:5000/api/users/login', { username, password });
        dispatch({ type: 'LOGIN', payload: response.data.token });
    };

    return (
        <AuthContext.Provider value={{ token: state.token, login }}>
            {children}
        </AuthContext.Provider>
    );
};