import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Faça o seu login</h1>

        <form className="flex w-full flex-col gap-2">
          <input
            type="email"
            className="h-15 w-full rounded-full border border-gray-300 px-4"
            placeholder="Digite seu email:"
          />
          <input
            type="password"
            className="h-15 w-full rounded-full border border-gray-300 px-4"
            placeholder="Digite sua senha:"
          />

          <button className="h-15 w-full cursor-pointer rounded-full border border-gray-300 bg-blue-400 px-4 font-bold text-white">
            Login
          </button>
        </form>
        <p>
          Ainda não tem conta?{" "}
          <Link to="/register" className="font-semibold underline">
            Registre-se aqui
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
