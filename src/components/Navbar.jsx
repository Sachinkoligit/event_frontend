import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthUser } from "../store/useAuthStore";

export default function Navbar() {
  const { authUser, admin, logout, adminLogout } = useAuthUser();
  const navigate = useNavigate();
  return (
    <div className="navbar bg-base-200 shadow-sm px-[50px]">
      <div className="navbar-start">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />{" "}
          </svg>
        </div>
        <span className="text-xl font-medium hover:cursor-default">
          EventIQ
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li className={`${admin || authUser ? "hidden" : "null"}`}>
            <a href="/admin">Admin_LogIn</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {admin ? (
          <div className="flex gap-2">
            <button className="btn" onClick={() => navigate("/create")}>
              Create_Event
            </button>
            <button className="btn" onClick={() => adminLogout()}>
              LogOut
            </button>
          </div>
        ) : authUser ? (
          <button
            className="btn"
            onClick={() => {
              logout();
            }}
          >
            LogOut
          </button>
        ) : (
          <button className="btn" onClick={() => navigate("/login")}>
            Login
          </button>
        )}
      </div>
    </div>
  );
}
