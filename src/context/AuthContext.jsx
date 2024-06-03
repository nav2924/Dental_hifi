import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/config.js"; // Ensure this is the correct path to your Firebase config
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return unsubscribe;
  }, []);

  const signIn = () => setIsAuthenticated(true);
  const signOut = () => {
    auth.signOut().then(() => {
      setIsAuthenticated(false);
    });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
