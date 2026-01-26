import axios from "axios";
import { createContext, useContext, useState } from "react";

export const userContext = createContext(null);

export const useUserContext = () => useContext(userContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const axiosGet = async () => {
      const { data } = await axios.get("/users/profile");

      setUser(data);
    };
    axiosGet();
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
