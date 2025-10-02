import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthUser } from "../store/useAuthStore";
import toast from "react-hot-toast";
import Navbar from "./Navbar";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuthUser();
  const validateForm = () => {
    if (!user.email) return toast.error("Email is required");
    if (!user.password) return toast.error("Password is required");

    return true;
  };
  const handleSubmit = () => {
    const success = validateForm();
    console.log(user);
    if (success === true) login(user);
    setUser({
      email: "",
      password: "",
    });
    navigate("/");
  };
  return (
    <>
      <Navbar />
      <div className="w-[100%] h-[600px] flex justify-center items-center">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 w-[25%] h-[60%]  flex flex-col justify-center items-start">
          <legend className="fieldset-legend pt-[40px] text-2xl">Login</legend>
          <label className="label text-xl">Email</label>
          <input
            type="email"
            className="input px-3 py-2"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Email"
          />

          <label className="label text-xl">Password</label>
          <input
            type="password"
            className="input px-3 py-2"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
          />

          <button
            className="btn btn-neutral mt-3 text-xl"
            onClick={handleSubmit}
          >
            Login
          </button>
          <div>
            <Link to="/signup" className="btn btn-link">
              Register
            </Link>
          </div>
        </fieldset>
      </div>
    </>
  );
}
