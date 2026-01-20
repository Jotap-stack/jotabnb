import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="h-30 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex h-30 w-50 items-center">
          <img className="h-30" src={logo} alt="JotaBnB" />
        </div>
        <div className="flex h-15 items-center rounded-full border border-gray-300 py-2 pr-4 pl-6 shadow-md">
          <p className="border-r border-r-gray-300 pr-4">Qualquer Lugar</p>
          <p className="border-r border-r-gray-300 px-4">Qualquer Semana</p>
          <p className="px-4">Hóspedes</p>
          <div className="rounded-full bg-blue-400 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
        <div className="flex h-15 items-center gap-2 rounded-full border border-gray-300 py-2 pr-4 pl-6 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>

          <p>Nome</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
