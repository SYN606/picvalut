import React from 'react';
import { Route, Navigate } from 'react-router-dom'; // Updated import
import { useAuth } from './AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useAuth();

    return (
        <Route
            {...rest}
            element={user ? <Component /> : <Navigate to="/login" />} // Updated to use element prop
        />
    );
};

export default PrivateRoute;
