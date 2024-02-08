import React, { createContext, useReducer, useContext } from 'react';
import authReducer from './authReducer';

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (token, user) => {
    dispatch({
      type: 'LOGIN',
      payload: { token, user }
    });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
