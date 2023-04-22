import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../actions/authActions';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(signOut());
  };

  return (
    <button onClick={handleClick}>
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
