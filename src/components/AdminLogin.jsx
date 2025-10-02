import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthUser } from "../store/useAuthStore";
import toast from "react-hot-toast";
import Navbar from "./Navbar";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });
  const { adminLogin } = useAuthUser();
  const validateForm = () => {
    if (!admin.email) return toast.error("Email is required");
    if (!admin.password) return toast.error("Password is required");

    return true;
  };
  const handleSubmit = () => {
    const success = validateForm();
    try {
      if (success === true) adminLogin(admin);
      setAdmin({
        email: "",
        password: "",
      });
      navigate("/");
    } catch (error) {
      navigate("/admin");
    }
  };
  return (
    <>
      <Navbar />
      <div className="w-[100%] h-[600px] flex justify-center items-center">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 w-[25%] h-[60%]  flex flex-col justify-center items-start">
          <legend className="fieldset-legend pt-[40px] text-2xl">
            Admin_Login
          </legend>
          <label className="label text-xl">Email</label>
          <input
            type="email"
            className="input px-3 py-2"
            value={admin.email}
            onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
            placeholder="Email"
          />

          <label className="label text-xl">Password</label>
          <input
            type="password"
            className="input px-3 py-2"
            value={admin.password}
            onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
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
