import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useUserContext } from "../contexts/UserContext";

const AccProfile = () => {
  const { user, setUser } = useUserContext();
  const [redirect, setRedirect] = useState(false);

  const logout = async () => {
    try {
      await axios.post("/users/logout");
      setUser(null);
      setRedirect(true);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  if (redirect) return <Navigate to={"/login"} />;

  if (!user) return <></>;

  return (
    <div className="flex flex-col items-center gap-4">
      <p>
        Logado como {user.name} ({user.email})
      </p>

      <button
        onClick={logout}
        className="min-w-44 cursor-pointer rounded-full bg-blue-400 px-4 py-2 font-bold text-white"
      >
        Logout
      </button>
    </div>
  );
};

export default AccProfile;
