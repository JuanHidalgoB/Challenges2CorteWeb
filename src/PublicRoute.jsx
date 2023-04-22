import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PublicRoute = ({ path, ...props }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Navigate to="/" /> : <Route {...props} path={path} />;
};

export default PublicRoute;
