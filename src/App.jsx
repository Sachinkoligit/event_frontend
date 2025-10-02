import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useAuthUser } from "./store/useAuthStore";
import Booked from "./components/Booked";
import CreateEvent from "./components/CreateEvent";
import { Toaster } from "react-hot-toast";
import AdminLogin from "./components/AdminLogin";

export default function App() {
  const { authUser, checkAuth, admin, adminCheckAuth } = useAuthUser();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    adminCheckAuth();
  }, [adminCheckAuth]);

  return (
    <div>
      <Routes>
        <Route path="/" element={admin || authUser ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/book" element={authUser ? <Booked /> : <Login />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
      <Toaster />
    </div>
  );
}
