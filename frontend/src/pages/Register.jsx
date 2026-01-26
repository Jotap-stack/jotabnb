import { useState } from "react";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../contexts/UserContext";

const Register = () => {
  const { setUser } = useUserContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password && name) {
      try {
        const { data: userDoc } = await axios.post("/users", {
          name,
          email,
          password,
        });

        setUser(userDoc);
        setRedirect(true);
      } catch (error) {
        console.error("Erro no registro:", error);
        alert(error.response?.data || "Erro ao se registrar");
      }
    } else {
      alert("Você precisa preencher todos os campos");
    }
   
  };




  if (redirect) return <Navigate to="/" />;

  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Faça o seu cadastro</h1>

        <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            className="h-15 w-full rounded-full border border-gray-300 px-4"
            placeholder="Digite seu Nome:"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="h-15 w-full rounded-full border border-gray-300 px-4"
            placeholder="Digite seu email:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="h-15 w-full rounded-full border border-gray-300 px-4"
            placeholder="Digite sua senha:"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="h-15 w-full cursor-pointer rounded-full border border-gray-300 bg-blue-400 px-4 font-bold text-white">
            Registrar
          </button>
        </form>
        <p>
          Já possui uma conta?{" "}
          <Link to="/login" className="font-semibold underline">
            Faça o login aqui
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
