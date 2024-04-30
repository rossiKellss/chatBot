import { createContext, useEffect, useState, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, isSetLogin] = useState(false);
  useEffect(() => {}, []);

  const Signin = async (email, password) => {
    
  };
  const Signup = async (userName, email, password) => {};
  const Logout = async () => {};

  const value = {
    user,
    isLoggedIn,
    Signin,
    Signup,
    Logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
