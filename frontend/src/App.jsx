import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Register from "./pages/Register";
import Account from "./pages/Account";
import { userContext } from "./contexts/UserContext";

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL;
axios.defaults.withCredentials = true;

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("/users/profile");
        setUser(data);
      } catch (error) {
        console.log("Usuário não logado");
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <userContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account/:subpage?" element={<Account />} />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </>
  );
};

export default App;
