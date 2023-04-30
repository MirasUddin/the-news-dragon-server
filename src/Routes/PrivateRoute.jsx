import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    // const location = useLocation();
    const {user, loader} = useContext(AuthContext);
    if(loader){
        return    <Spinner animation="border" variant="warning" />
    }
   
    if(user){
        return children;
    }

    return <Navigate state={{ from: location }}  to="/login" replace ></Navigate>;
};

export default PrivateRoute;