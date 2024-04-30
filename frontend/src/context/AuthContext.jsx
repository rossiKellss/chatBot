import { createContext, useEffect, useState, useContext } from "react";
import { loginUser } from "../helpers/apiCommunicator";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {}, []);

  const Signin = async (email, password) => {
    const data = await loginUser(email, password);
    if (data) {
      setUser({ email: data.email, name: data.name });
      setIsLoggedIn(true);
      
    }
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