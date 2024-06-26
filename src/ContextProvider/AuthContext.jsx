import { createContext, useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";


export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
   
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const axios = useAxios();

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const signIn = async (userData) => {
    setLoading(true);
    const result = await axios.post("/auth/signin", userData, {
      withCredentials: true,
    });
  
    if (result.data.data) {
      setUser(result?.data?.data);
      setLoading(false);
    
    }
    setLoading(false);
    return result.data;
  };

  const signUp = async (userData) => {
    setLoading(true);

    const result = await axios.post("/auth/signup", userData, {
      withCredentials: true,
    });
    if (result?.data?.data) {
      setUser(result?.data?.data);
    }
    setLoading(false);
    return result.data;
  };

  const logout = async () => {
    setLoading(true);
    const result = await axios.get("/auth/logout", { withCredentials: true });
    
    if (result.data) {
      setUser([]);
      setLoading(false);
    }
    return result;
  };

  useEffect(() => {
    const unSubscribe = async () => {
      try {
        const result = await axios.post(
          "/auth/refreshToken",
          {},
          { withCredentials: true }
        );
    
        if (result?.data?.data) {
          setUser(result?.data?.data);
          setLoading(false);
        } else {
          logout();
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        logout();
        setLoading(false);
      }

    
    };
    unSubscribe();
  }, []);

  const info = {
    goToTop,
    signIn,
    signUp,
    logout,
    user,
    loading,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
