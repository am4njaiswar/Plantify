import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const GuestRoute = () => {
    const { authUser } = useAuth();
    
    // If a user is logged in, redirect them to the main predictor page.
    // Otherwise, show the login or signup page.
    return authUser ? <Navigate to="/" /> : <Outlet />;
};

export default GuestRoute;