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
  // get tokens
  const rawUserId = localStorage.getItem("token");
  const rawAdmin = localStorage.getItem("token");
  const initialToken = localStorage.getItem("token");

  // Deserialize
  const initialUserId = parseInt(rawUserId);
  const initialAdmin = rawAdmin === "true" ? true : false;

  const [token, setToken] = useState(initialToken);
  const [userId, setUserId] = useState(initialUserId);
  const [admin, setAdmin] = useState(initialAdmin);

  const userIsLoggedIn = !!token && !admin;
  const adminIsLoggedIn = !!token && admin;

  const loginHandler = ({ token, userId, admin }) => {
    setToken(token);
    setUserId(userId);
    setAdmin(admin);

    // Serialize
    const adminString = admin.toString();
    const userIdString = userId.toString();

    localStorage.setItem("token", token);
    localStorage.setItem("admin", adminString);
    localStorage.setItem("userId", userIdString);
  };

  const logoutHandler = () => {
    setUserId(null);
    setToken(null);
    setAdmin(false);
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    localStorage.removeItem("userId");
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
