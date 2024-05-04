import { createContext, useEffect, useState, useContext } from "react";
import { loginUser,checkAuthStatus ,resigterUser} from "../helpers/apiCommunicator";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkStatus = async () => {
      const data=await checkAuthStatus();
      if (data){
        setUser({email:data.email,name:data.name})
      }
    };
    checkStatus();
  }, []);

  const Signin = async (email, password) => {
    const data = await loginUser(email, password);
    if (data) {
      setUser({ email: data.email, name: data.name });
      setIsLoggedIn(true);
    }
  };
  const Signup = async (userName, email, password) => {
    const register = await resigterUser(userName,email,password);
    if (!register.status==200){
      throw new Error("Error registering");

    }

  };
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
