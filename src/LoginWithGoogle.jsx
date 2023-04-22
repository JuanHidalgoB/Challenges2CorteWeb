import React from 'react';
import { useDispatch } from 'react-redux';
import { signInWithGoogle } from '../actions/authActions';

const LoginWithGoogle = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(signInWithGoogle());
  };

  return (
    <button onClick={handleClick}>
      Iniciar sesión con Google
    </button>
  );
};

export default LoginWithGoogle;
