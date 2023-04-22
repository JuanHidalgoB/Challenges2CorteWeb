import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthState } from '../selectors/authSelectors';

const LoginButtons = () => {
  const auth = useSelector(selectAuthState);
  const isAuthenticated = useMemo(() => !!auth.user, [auth]);

  return (
    <div>
      <button disabled={isAuthenticated}>Registrarse</button>
      <button disabled={isAuthenticated}>Iniciar sesión</button>
    </div>
  );
};

export default LoginButtons;
