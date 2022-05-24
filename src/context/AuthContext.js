import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  userId: null,
  isLoggedIn: false,
  isAdmin: false,
  login: (userData) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [admin, setAdmin] = useState(false);

  const userIsLoggedIn = !!token && !admin;

  const adminIsLoggedIn = !!token && admin;

  const loginHandler = (userData) => {
    setToken(userData.token);
    setUserId(userData.userId);
    setAdmin(userData.admin);
  };

  const logoutHandler = () => {
    setUserId(null);
    setToken(null);
    setAdmin(false);
  };

  const contextValue = {
    token: token,
    userId: userId,
    isLoggedIn: userIsLoggedIn,
    isAdmin: adminIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;