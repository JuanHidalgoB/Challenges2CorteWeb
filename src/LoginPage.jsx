import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const { login, isAuthenticated, lastVisitedPage, setLastVisitedPage } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login(username);
    setLastVisitedPage('/');
  };

  if (isAuthenticated) {
    return <Navigate to={lastVisitedPage || '/'} />;
  }

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
