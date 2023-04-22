//función para iniciar sesión con Google
export const signInWithGoogle = () => {
    return async (dispatch) => {
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const userCredential = await firebase.auth().signInWithPopup(provider);
        const user = userCredential.user;
        dispatch({ type: 'SIGN_IN', payload: user });
      } catch (error) {
        console.log(error);
      }
    };
  };