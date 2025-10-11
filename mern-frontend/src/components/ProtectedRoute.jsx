// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Use your custom hook

const ProtectedRoute = () => {
    const { authUser } = useAuth(); // Get authUser from your context
    const location = useLocation();

    if (!authUser) {
        // If no user, redirect to login, saving the location they wanted to go to
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // If the user is logged in, render the nested child route (e.g., PredictorPage)
    return <Outlet />;
};

export default ProtectedRoute;