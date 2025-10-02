import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthUser } from "../store/useAuthStore";
import toast from "react-hot-toast";

export default function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { signup } = useAuthUser();
  const validateForm = () => {
    if (!user.fullName) return toast.error("Full name is required");
    if (!user.email) return toast.error("Email is required");
    if (!user.password) return toast.error("Password is required");

    return true;
  };
  const handleSubmit = () => {
    const success = validateForm();
    // console.log(user);
    if (success === true) signup(user);
    setUser({
      fullName: "",
      email: "",
      password: "",
    });
    navigate("/login");
  };
  return (
    <div className="w-[100%] h-[600px] flex justify-center items-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 w-[25%] h-[70%]  flex flex-col justify-center items-start">
        <legend className="fieldset-legend pt-[40px] text-2xl">Register</legend>
        <label className="label text-xl">Full Name</label>
        <input
          type="text"
          className="input px-3 py-2"
          value={user.fullName}
          onChange={(e) => setUser({ ...user, fullName: e.target.value })}
          placeholder="John Doe"
        />

        <label className="label text-xl">Email</label>
        <input
          type="email"
          className="input px-3 py-2"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="john@gmail.com"
        />

        <label className="label text-xl">Password</label>
        <input
          type="password"
          className="input px-3 py-2"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="••••••"
        />

        <button className="btn btn-neutral mt-3 text-xl" onClick={handleSubmit}>
          Register
        </button>
        <div>
          <Link to="/login" className="btn btn-link">
            Login
          </Link>
        </div>
      </fieldset>
    </div>
  );
}
