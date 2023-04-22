const initialState = {
    user: null,
    error: null
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGN_IN':
        return {
          ...state,
          user: action.payload.user,
          error: null
        };
      case 'SIGN_OUT':
        return {
          ...state,
          user: null,
          error: null
        };
      case 'AUTH_ERROR':
        return {
          ...state,
          error: action.payload.errorMessage
        };
      case 'CLEAR_AUTH_ERROR':
        return {
          ...state,
          error: null
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  