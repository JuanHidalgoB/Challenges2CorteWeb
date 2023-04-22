import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Header = () => {
  const { isAuthenticated, username, logout } = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated && <p>Welcome, {username}</p>}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isAuthenticated ? (
            <li>
              <button onClick={() => logout()}>Logout</button>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
