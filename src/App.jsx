import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './LoginPage';
import PrivateRoute from './PrivateRoute';
import Header from './Header';
import { AuthProvider } from './AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <PrivateRoute path="/private" element={<p>This is a private route!</p>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

