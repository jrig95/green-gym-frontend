import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  userId: null,
  isLoggedIn: false,
  isAdmin: false,
  login: (userData) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remaingDuration = adjExpirationTime - currentTime;

  return remaingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationTime = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationTime);

  if (remainingTime <= 86400000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return { token: storedToken, duration: remainingTime };
};

export const AuthContextProvider = ({ children }) => {
  const tokenData = retrieveStoredToken();

  // Check token has value
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  // get tokens
  const rawUserId = localStorage.getItem("userId");
  const rawAdmin = localStorage.getItem("admin");

  // Deserialize
  const initialUserId = parseInt(rawUserId);
  const initialAdmin = rawAdmin === "true" ? true : false;

  const [token, setToken] = useState(initialToken);
  const [userId, setUserId] = useState(initialUserId);
  const [admin, setAdmin] = useState(initialAdmin);

  const userIsLoggedIn = !!token && !admin;
  const adminIsLoggedIn = !!token && admin;

  const logoutHandler = useCallback(() => {
    setUserId(null);
    setToken(null);
    setAdmin(false);
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    localStorage.removeItem("userId");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = ({ token, userId, admin, expirationTime }) => {
    setToken(token);
    setUserId(userId);
    setAdmin(admin);

    // Serialize
    const adminString = admin.toString();
    const userIdString = userId.toString();

    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    localStorage.setItem("admin", adminString);
    localStorage.setItem("userId", userIdString);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

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
